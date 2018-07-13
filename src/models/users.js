const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getAll(){
  return (
    db('users')
  )
}

function getOne(id){
  return (
    db('users')
    .where({ id })
    .first()
  )
}

function getOneByUserName(username){
  return (
    db('users')
    .where({ username })
    .first()
  )
}
function create(username, body){
  let {first_name, last_name, password} = body
  return getOneByUserName(username)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){
    return (
      db('users')
      .insert({ username, password: hashedPassword, first_name, last_name })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.password
    return data
  })
}


function createUserParcel(parcel_name, location, parcel_type, owner_id, acres){
  return db('parcel_types')
  .select('id')
  .where('parcel_type', parcel_type)
  .then(parcel_id => {
    return db('parcels')
    .insert({parcel_name, location:JSON.stringify(location), owner_id, acres})
    .returning('*')
  })
}

function getUserParcels(owner_id) {
  return db('parcels')
  .where('owner_id', owner_id)
  // .then((arr) =>
  //   arr.map(ele => ({...ele, location:JSON.parse(ele.location)})))
}

module.exports = {
  getAll,
  getOne,
  create,
  getOneByUserName,
  createUserParcel,
  getUserParcels
}
