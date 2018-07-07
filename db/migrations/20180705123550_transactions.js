const TABLE_NAME = 'transactions'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('owner_id').references('users.id').notNullable()
    table.integer('renter_id').references('users.id')
    table.integer('parcel_id').references('parcels.id')
    table.integer('price').notNullable()
    // table.integer('message_id').references('messages.id')
    table.timestamps(true, true)
    table.timestamp('deleted_at')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
