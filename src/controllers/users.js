const userModel = require('../models/users')

function create(req, res, next){
  if(!req.body.username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad password'})
  }

  if(!req.body.first_name){
    return next({ status: 400, message: 'Need first name'})
  }

  if(!req.body.last_name){
    return next({ status: 400, message: 'Need last name'})
  }

  userModel.create(req.body.username, req.body)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAll(req, res, next) {
  userModel.getAll()
  .then(users => {
    res.status(200).send({users})
  })
  .catch(next)
}

function getOne(req, res, next){
  userModel.getOne(req.params.id)
  .then(users => {
    res.status(200).send({users})
  })
  .catch(next)
}

function createUserParcel(req, res, next){
  console.log('KITTENS: ', req.body)
  const { parcel_name, location, parcel_type, owner_id, acres} = req.body
  userModel.createUserParcel(parcel_name, location, parcel_type, req.params.id, acres)
  .then(newParcel => {
    res.status(200).send({newParcel})
  })
  .catch(next)
}

function getUserParcels(req, res, next) {
  userModel.getUserParcels(req.params.id)
  .then(userParcels => {
    res.status(200).send({userParcels})
  })
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  create,
  getAll,
  getOne,
  createUserParcel,
  getUserParcels
}
