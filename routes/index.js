const express = require('express')
const router = express.Router()
const pathController = require('../controllers/pathController')

router.get('/', pathController.index)

// a route for gas stations, paths, food, scenic
// so
// /gas
// /food
// /scenic
// /paths
// /activity
// if you were to add a gas station to a path
// you would need to add that object id to the path object you're trying to 
// add the gas station to
// for example: 
// path1.gasStations.push(gasStationObjectId)

module.exports = router