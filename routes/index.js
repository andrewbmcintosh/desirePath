const express = require('express')
const router = express.Router()
const pathController = require('../controllers/pathController')
const gasStationController = require("../models/GasStation")
const sceneryController = require("../controllers/sceneryController")

router.get('/', pathController.index)

router.get('/', gasStationController.index)
router.put('/',gasStationController.create)

router.get('/', sceneryController.index)
router.put('/',sceneryController.create)



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