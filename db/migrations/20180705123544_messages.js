const TABLE_NAME = 'messages'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('title')
    table.string('body')
    table.integer('sender_id').references('users.id')
    table.integer('recipient_id').references('users.id')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
