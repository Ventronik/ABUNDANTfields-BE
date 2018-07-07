const parcelsModel = require('../models/parcels')

function getAll(req, res, next) {
  parcelsModel.getAll()
  .then(parcelsModel => {
    res.status(200).send({ parcelsModel })
  })
  .catch(next)
}

function getOne(req, res, next) {
  parcelsModel.getOne(req.params.id)
  .then(parcel => {
    res.status(200).send({parcel})
  })
  .catch(next)
}

function create(req, res, next) {
  const { parcel_name, location, parcel_type, owner_id, acres} = req.body
  parcelsModel.create(parcel_name, location, parcel_type,owner_id, acres)
  .then(parcel => {
    res.status(200).send({parcel})
  })
  .catch(next)
}

function remove(req, res, next) {
  const date = new Date()
  parcelsModel.remove(req.params.id, date)
  .then(({id, ...parcel}) => {
    res.status(200).send({parcel})
  })
  .catch(next)
}

function edit(req, res, next) {
  const { parcel_name, location, parcel_type, owner_id, acres} = req.body
  parcelsModel.edit( req.params.id, parcel_name, location, parcel_type, owner_id, acres)
  .then(({id, ...parcel})=>{
    res.status(200).send({parcel})
  })
}

module.exports = {
  create,
  getAll,
  getOne,
  edit,
  remove
}
