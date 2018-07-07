exports.seed = function(knex, Promise) {

  const tablesToClean = ['users','parcel_types','parcels', 'messages', 'transactions']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
