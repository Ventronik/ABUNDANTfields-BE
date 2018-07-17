const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', userController.create)
router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
// router.get('/:id/transactions', userController.getUserTransactions) // need to re-add  authController.isAuthenticated,
// router.get('/:id/transactions/:transaction_id', userController.getOneUserTransaction) // need to re-add  authController.isAuthenticated,
router.post('/:id/parcel', userController.createUserParcel) // need to re-add  authController.isAuthenticated,
router.get('/:id/parcels', userController.getUserParcels)
router.post('/:id/transactions', userController.createUserTransactions)
router.patch('/:id/transactions/:trans_id', userController.acceptTransaction)
// router.get('/:id/parcels/:parcel_id', userController.getUserParcel) // need to re-add  authController.isAuthenticated,


module.exports = router
