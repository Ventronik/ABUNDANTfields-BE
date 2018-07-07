const TABLE_NAME = 'users'
exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
