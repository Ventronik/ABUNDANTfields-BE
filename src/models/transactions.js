const db = require('../../db')

function getAll({orderByColumn='id', orderDirection='asc', renter_id = '1'}) {
  console.log('renter_id', renter_id)
  let query = db('transactions')
    .whereNull('transactions.deleted_at')
    .leftJoin('users', 'users.id', 'transactions.owner_id')
    .leftJoin('users as renters', 'renters.id', 'transactions.renter_id')
    .innerJoin('parcels', 'parcels.id','transactions.parcel_id')
    .select(
      'transactions.id as id',
      'renter_id as renter',
      'parcel_id',
      'acres',
      'transactions.created_at as created_at',
      'transactions.updated_at as updated_at',
      'parcels.location as location',
      'transactions.owner_id as owner',
      'users.first_name as fname',
      'users.last_name as lname',
      'users.username',
      'renters.first_name as renter_fname',
      'renters.last_name as renter_lname',
      'renters.username as renter_uname',
      'parcels.parcel_name as parcel_name'
    )

    if(renter_id === 'null') query = query.whereNull('transactions.renter_id')
  return query.orderBy(orderByColumn, orderDirection)
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

function create(owner_id, parcel_id, price) {
  return db('transactions')
  .insert({owner_id, parcel_id, price})
  .returning('*')
}

function remove(id, date) {
  return db('transactions')
  .update({ deleted_at: date })
  .where({id})
  .returning('*')
}

function edit(renter_id, id) {
  return db('transactions')
  .update({ renter_id })
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
