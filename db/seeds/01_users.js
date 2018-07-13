const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, first_name: 'Roger', last_name:'Schmidt', username:'Roger', password:'$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe' },
    { id: 2, first_name: 'Wes', last_name:'Schmidt', username:'Wes', password:'$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe' },
    { id: 3, first_name: 'Scott', last_name:'Schmidt', username:'Scott', password:'$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe' },
    { id: 4, first_name: 'Dustin', last_name:'Ruskell', username:'Dustin', password:'$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
