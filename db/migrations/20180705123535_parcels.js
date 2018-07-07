 const TABLE_NAME = 'parcels'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('parcel_name').notNullable()
    table.string('location').notNullable()
    table.integer('parcel_type').references('parcel_types.id')
    table.integer('owner_id').references('users.id')
    table.integer('acres').notNullable()
    table.timestamps(true, true)
    table.timestamp('deleted_at')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
