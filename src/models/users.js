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
  let {first_name, last_name} = body
  return getOneByUserName(username)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}
    return bcrypt.hash(body.password, 10)
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

module.exports = {
  getAll,
  getOne,
  create
}
