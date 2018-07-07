const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getAll(){
  return (
    db('parcels')
    .whereNull('deleted_at')
  )
}

function getOne(id){
  return (
    db('parcels')
    .whereNull('deleted_at')
    .where({ id })
    .first()
  )
}

function create(parcel_name, location, parcel_type, owner_id, acres) {
  return db('parcels')
  .insert({parcel_name, location, parcel_type, owner_id, acres})
  .returning('*')
}

function edit(id, parcel_name, location, parcel_type, owner_id, acres) {
  return db('parcels')
  .update({parcel_name, location, parcel_type, owner_id, acres})
  .where({ id })
  .whereNull('deleted_at')
  .returning('*')
}

function remove(id, date){
  return db('parcels')
  .update({deleted_at: date})
  .where({ id })
  .returning('*')
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove
}
