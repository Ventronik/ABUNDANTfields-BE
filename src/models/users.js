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
  .select('parcels.id as id',
          'parcels.location',
          'parcels.parcel_type',
          'parcels.acres',
          'parcels.owner_id',
          'parcels.parcel_name',
        )
  .where('parcels.owner_id', owner_id)
  .then((parcels) => {
    return Promise.all(parcels.map(parcel => {
      return db('transactions')
              .where('parcel_id', parcel.id)
              .orderBy('id', 'desc').first()
              .then(transaction => {
                return {...parcel, transaction}
              })

  }))})
  .then(parcels => {
    return Promise.all(parcels.map(parcel =>{
      return db('users')
              .where('id', parcel.owner_id)
              .first()
              .then(({password, ...user}) => {
                return {...parcel, user}
              })

  }))})
  .then(parcels => {
    return Promise.all(parcels.map(parcel => {
      if(parcel.transaction && parcel.transaction.renter_id){
        return db('users')
        .where('id', parcel.transaction.renter_id)
        .first()
        .then(({password, ...renter}) => {
          return {...parcel, renter}
        })
      }
      else {
        return {...parcel, renter: null}
      }

  }))})
  .then(parcels => {
    // console.log(parcels)
    return parcels
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  getOneByUserName,
  createUserParcel,
  getUserParcels
}
