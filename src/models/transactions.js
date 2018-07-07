const db = require('../../db')

function getAll(orderByColumn='id', orderDirection='asc') {
  const query = db('transactions')
    .whereNull('transactions.deleted_at')
    .leftJoin('users', 'users.id', 'transactions.owner_id')
    .leftJoin('parcels', 'parcels.id','transactions.parcel_id')
    .select(
      'transactions.id as id',
      'renter_id as renter',
      'parcel_id',
      'transactions.created_at as created_at',
      'transactions.updated_at as updated_at',
      'parcels.location as location',
      'transactions.owner_id as owner',
      'users.first_name as fname',
      'users.last_name as lname')
    // )
    .orderBy(orderByColumn, orderDirection)
  return query
}

function getOne(id) {

  const query = db('transactions')
    .join('users', 'users.id', 'transactions.owner_id')
    .join('parcels', 'parcels.id','transactions.parcel_id')
    .where( 'transactions.id', id )
    .select(
      'transactions.id as id',
      'renter_id as renter',
      'parcel_id',
      'transactions.created_at as created_at',
      'transactions.updated_at as updated_at',
      'parcels.location as location',
      'transactions.owner_id as owner',
      'users.first_name as fname',
      'users.last_name as lname')
  return query
}

function create(owner_id, renter_id, parcel_id, price) {
  return db('transactions')
  .insert({owner_id, renter_id, parcel_id, price})
  .returning('*')
}

function remove(id, date) {
  return db('transactions')
  .update({ deleted_at: date })
  .where({id})
  .returning('*')
}

function edit(id, owner_id, renter_id, parcel_id, price) {
  return db('transactions')
  .update({owner_id, renter_id, parcel_id, price})
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
