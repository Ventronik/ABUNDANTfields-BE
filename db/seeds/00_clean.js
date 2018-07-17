exports.seed = function(knex, Promise) {

  const tablesToClean = ['transactions','parcels','parcel_types', 'users' ]

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
