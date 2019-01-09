const express = require('express')
const router = express.Router()
const pathController = require('../controllers/pathController')
const activityController = require('../controllers/activityController')
const addStopController = require('../controllers/addStopController')
// const foodController = require('../controllers/foodController')
// const gasController = require('../controllers/gasController')
// const sceneryController = require('../controllers/sceneryController')


// const gasStationController = require("../models/GasStation")
// const sceneryController = require("../controllers/sceneryController")
// const foodController = require("../controllers/foodController")

router.get('/', pathController.index)
router.get('/newpath', pathController.new)
router.post('/', pathController.create)

router.get('/newactivity', activityController.new)
router.get('/activity', activityController.index)
// router.post('/activity', activityController.create)
router.post('/:pathId/activity', activityController.createStopInPath)

// going to create a add stop route to funnel the add stops into. This can
// help create a clear way to design something where a person does not 
// need to create a path to add a stop
router.post('/:pathId/addStop/activity/:activityId', addStopController.activity)

router.get('/path/:pathId', pathController.show)
router.get('/activity/:activityId', activityController.show)

// then
// when you click on the add button you take that object id and add it to the path id.
// because of this we need to see the two ids in the url




// router.get('/gasstation', gasStationController.index)
// router.post('/gasstation', gasStationController.create)



// router.get('/scenery', sceneryController.index)
// router.post('/', sceneryController.create)

// router.get('/food', foodController.index)
// router.post('/', foodController.create)




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