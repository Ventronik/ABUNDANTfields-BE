const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

const parcelsController = require('../controllers/parcels')

router.get('/', parcelsController.getAll)
router.get('/:id', parcelsController.getOne)
router.post('/', parcelsController.create) // need to re-add  authController.isAuthenticated,
router.put('/:id', parcelsController.edit) // need to re-add  authController.isAuthenticated,
router.delete('/:id', parcelsController.remove)// need to re-add  authController.isAuthenticated,


module.exports = router
