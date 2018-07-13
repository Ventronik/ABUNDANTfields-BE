const TABLE_NAME = 'parcels'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, parcel_name: 'Boardwalk', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:1, acres:50, deleted_at:null},
    { id: 2, parcel_name: 'Park Place', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:2, acres:75, deleted_at:null},
    { id: 3, parcel_name: 'Pennsylvania Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 3, owner_id:3, acres:100, deleted_at:null},
    { id: 4, parcel_name: 'North Caroline Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:4, acres:125, deleted_at:null},
    { id: 5, parcel_name: 'Pacific Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:1, acres:150, acres:175, deleted_at:null},
    { id: 6, parcel_name: 'Marvin Gardens', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 3, owner_id:2, acres:200, deleted_at:null},
    { id: 7, parcel_name: 'Ventnor Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:3, acres:225, deleted_at:null},
    { id: 8, parcel_name: 'Atlantic Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:4, acres:250, deleted_at:null},
    { id: 9, parcel_name: 'Illinois Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 3, owner_id:1, acres:300, deleted_at:null},
    { id: 10, parcel_name: 'Indiana Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:2, acres:325, deleted_at:null},
    { id: 11, parcel_name: 'Kentucky Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:3, acres:350, deleted_at:null},
    { id: 12, parcel_name: 'New York Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 3, owner_id:4, acres:375, deleted_at:null},
    { id: 13, parcel_name: 'Tennessee Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:1, acres:400, deleted_at:null},
    { id: 14, parcel_name: 'St. James Place', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:2, acres:425, deleted_at:null},
    { id: 15, parcel_name: 'Virginia Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 3, owner_id:3, acres:450, deleted_at:null},
    { id: 16, parcel_name: 'States Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:4, acres:525, deleted_at:null},
    { id: 17, parcel_name: 'St. Charles Place', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:1, acres:475, deleted_at:null},
    { id: 18, parcel_name: 'Connecticut Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 3, owner_id:2, acres:500, deleted_at:null},
    { id: 19, parcel_name: 'Vermont Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 1, owner_id:3, acres:550, deleted_at:null},
    { id: 20, parcel_name: 'Oriental Ave', location: {'lat':`47.59913`, 'long':`-122.33359000000002`}, parcel_type: 2, owner_id:4, acres:575, deleted_at:null}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
