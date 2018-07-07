const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', userController.create)
router.get('/', userController.getAll)
router.get('/:id', userController.getOne) 

module.exports = router
