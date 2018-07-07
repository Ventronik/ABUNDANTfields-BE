const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

const transactionsController = require('../controllers/transactions')

router.get('/', transactionsController.getAll)
router.get('/:id', transactionsController.getOne)
router.post('/', transactionsController.create) // need to re-add  authController.isAuthenticated,
router.put('/:id', transactionsController.edit) // need to re-add  authController.isAuthenticated,
router.delete('/:id', transactionsController.remove)// need to re-add  authController.isAuthenticated,


module.exports = router
