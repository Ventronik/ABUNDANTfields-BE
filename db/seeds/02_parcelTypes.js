const TABLE_NAME = 'parcel_types'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, parcel_type: 'Irrigated'},
    { id: 2, parcel_type: 'Non-Irrigated'},
    { id: 3, parcel_type: 'Pasture'}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
