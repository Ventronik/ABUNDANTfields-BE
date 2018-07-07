const TABLE_NAME = 'transactions'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, owner_id: 1, renter_id: 4, parcel_id:1, price:50, deleted_at:null},
    { id: 2, owner_id: 2, renter_id: 3, parcel_id:2, price:75, deleted_at:null},
    { id: 3, owner_id: 3, renter_id: 2, parcel_id:3, price:100, deleted_at:null},
    { id: 4, owner_id: 4, renter_id: 1, parcel_id:4, price:125, deleted_at:null},
    { id: 5, owner_id: 1, renter_id: 4, parcel_id:5, price:150, deleted_at:null},
    { id: 6, owner_id: 2, renter_id: 3, parcel_id:6, price:175, deleted_at:null},
    { id: 7, owner_id: 3, renter_id: 2, parcel_id:7, price:200, deleted_at:null},
    { id: 8, owner_id: 4, renter_id: 4, parcel_id:8, price:225, deleted_at:null},
    { id: 9, owner_id: 1, renter_id: 3, parcel_id:9, price:250, deleted_at:null},
    { id: 10, owner_id: 2, renter_id: 2, parcel_id:10, price:300, deleted_at:null},
    { id: 11, owner_id: 3, renter_id: 1, parcel_id:11, price:325, deleted_at:null},
    { id: 12, owner_id: 4, renter_id: 4, parcel_id:12, price:350, deleted_at:null},
    { id: 13, owner_id: 1, renter_id: 3, parcel_id:13, price:375, deleted_at:null},
    { id: 14, owner_id: 2, renter_id: 2, parcel_id:14, price:400, deleted_at:null},
    { id: 15, owner_id: 3, renter_id: 1, parcel_id:15, price:425, deleted_at:null},
    { id: 16, owner_id: 4, renter_id: 4, parcel_id:16, price:450, deleted_at:null},
    { id: 17, owner_id: 1, renter_id: 3, parcel_id:17, price:475, deleted_at:null},
    { id: 18, owner_id: 2, renter_id: 2, parcel_id:18, price:500, deleted_at:null},
    { id: 19, owner_id: 3, renter_id: null, parcel_id:19, price:525, deleted_at:null},
    { id: 20, owner_id: 4, renter_id: null, parcel_id:20, price:550, deleted_at:null},
    { id: 21, owner_id: 1, renter_id: null, parcel_id:1, price:575, deleted_at:null},
    { id: 22, owner_id: 2, renter_id: null, parcel_id:2, price:600, deleted_at:null},
    { id: 23, owner_id: 3, renter_id: null, parcel_id:3, price:625, deleted_at:null},
    { id: 24, owner_id: 4, renter_id: null, parcel_id:4, price:650, deleted_at:null},
    { id: 25, owner_id: 1, renter_id: null, parcel_id:5, price:675, deleted_at:null},
    { id: 26, owner_id: 2, renter_id: null, parcel_id:6, price:700, deleted_at:null},
    { id: 27, owner_id: 3, renter_id: null, parcel_id:7, price:725, deleted_at:null},
    { id: 28, owner_id: 4, renter_id: null, parcel_id:8, price:750, deleted_at:null},
    { id: 29, owner_id: 1, renter_id: null, parcel_id:9, price:775, deleted_at:null},
    { id: 30, owner_id: 2, renter_id: null, parcel_id:10, price:800, deleted_at:null},
    { id: 31, owner_id: 3, renter_id: null, parcel_id:11, price:825, deleted_at:null},
    { id: 32, owner_id: 4, renter_id: null, parcel_id:12, price:850, deleted_at:null},
    { id: 33, owner_id: 1, renter_id: null, parcel_id:13, price:875, deleted_at:null},
    { id: 34, owner_id: 2, renter_id: null, parcel_id:14, price:900, deleted_at:null},
    { id: 35, owner_id: 3, renter_id: null, parcel_id:15, price:1000, deleted_at:null}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
