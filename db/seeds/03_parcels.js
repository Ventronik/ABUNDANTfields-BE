const TABLE_NAME = 'parcels'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, parcel_name: 'Irrigated', location: `47.59913, -122.33359000000002`, parcel_type: 1, owner_id:1, acres:50, deleted_at:null},
    { id: 2, parcel_name: 'Irrigated', location: `47.59921000000001, -122.33409`, parcel_type: 2, owner_id:2, acres:75, deleted_at:null},
    { id: 3, parcel_name: 'Irrigated', location: `47.600080000000005, -122.33407000000001`, parcel_type: 3, owner_id:3, acres:100, deleted_at:null},
    { id: 4, parcel_name: 'Irrigated', location: `47.601760000000006, -122.33407000000001`, parcel_type: 1, owner_id:4, acres:125, deleted_at:null},
    { id: 5, parcel_name: 'Irrigated', location: `47.601800000000004, -122.33369`, parcel_type: 2, owner_id:1, acres:150, acres:175, deleted_at:null},
    { id: 6, parcel_name: 'Irrigated', location: `47.60186, -122.33363000000001`, parcel_type: 3, owner_id:2, acres:200, deleted_at:null},
    { id: 7, parcel_name: 'Irrigated', location: `47.60258, -122.33196000000001`, parcel_type: 1, owner_id:3, acres:225, deleted_at:null},
    { id: 8, parcel_name: 'Irrigated', location: `47.60325, -122.33038`, parcel_type: 2, owner_id:4, acres:250, deleted_at:null},
    { id: 9, parcel_name: 'Irrigated', location: `47.59913, -122.33359000000002`, parcel_type: 3, owner_id:1, acres:300, deleted_at:null},
    { id: 10, parcel_name: 'Irrigated', location: `47.60378, -122.32903`, parcel_type: 1, owner_id:2, acres:325, deleted_at:null},
    { id: 11, parcel_name: 'Irrigated', location: `47.605140000000006, -122.32586`, parcel_type: 2, owner_id:3, acres:350, deleted_at:null},
    { id: 12, parcel_name: 'Irrigated', location: `47.607240000000004, -122.32084`, parcel_type: 3, owner_id:4, acres:375, deleted_at:null},
    { id: 13, parcel_name: 'Irrigated', location: `47.60817, -122.32088000000002`, parcel_type: 1, owner_id:1, acres:400, deleted_at:null},
    { id: 14, parcel_name: 'Irrigated', location: `47.609730000000006, -122.32089`, parcel_type: 2, owner_id:2, acres:425, deleted_at:null},
    { id: 15, parcel_name: 'Irrigated', location: `47.611160000000005, -122.32089`, parcel_type: 3, owner_id:3, acres:450, deleted_at:null},
    { id: 16, parcel_name: 'Irrigated', location: `47.614050000000006, -122.32086000000001`, parcel_type: 1, owner_id:4, acres:525, deleted_at:null},
    { id: 17, parcel_name: 'Irrigated', location: `47.61807, -122.32091000000001`, parcel_type: 2, owner_id:1, acres:475, deleted_at:null},
    { id: 18, parcel_name: 'Irrigated', location: `47.618790000000004, -122.32078000000001`, parcel_type: 3, owner_id:2, acres:500, deleted_at:null},
    { id: 19, parcel_name: 'Irrigated', location: `47.620180000000005, -122.32082000000001`, parcel_type: 1, owner_id:3, acres:550, deleted_at:null},
    { id: 20, parcel_name: 'Irrigated', location: `47.62483, -122.32089`, parcel_type: 2, owner_id:4, acres:575, deleted_at:null}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
