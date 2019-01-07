const express = require('express')
const router = express.Router()
const pathController = require('..controllers/pathController')

router.get('/', pathController.index)

module.exports = router