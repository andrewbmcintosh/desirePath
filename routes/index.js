const express = require('express')
const router = express.Router()
const pathController = require('../controllers/pathController')
const activityController = require('../controllers/activityController')
const addStopController = require('../controllers/addStopController')
const foodController = require('../controllers/foodController')
const gasStationController = require('../controllers/gasStationController')
const sceneryController = require('../controllers/sceneryController')

router.get('/', pathController.index)
router.get('/:pathId/path', pathController.show)
router.get('/newPath', pathController.new)
router.post('/', pathController.create)

//the route below currently works from the addStopController 
router.get('/:pathId/newActivity', activityController.new)

router.get('/newActivity', activityController.new)
router.get('/activity', activityController.index)
router.post('/activity', activityController.create)

router.get('/newFood', foodController.new)
router.get('/food', foodController.index)
router.post('/food', foodController.create)

router.get('/newGasStation', gasStationController.new)
router.get('/gasStation', gasStationController.index)
router.post('/gasStation', gasStationController.create)

router.get('/newScenery', sceneryController.new)
router.get('/scenery', sceneryController.index)
router.post('/scenery', sceneryController.create)

// router.post('/activity', activityController.create)

// going to create a add stop route to funnel the add stops into. This can
// help create a clear way to design something where a person does not 
// need to create a path to add a stop

// router.get('/:pathId/addStop', addStopController.new)
router.get('/:pathId/addStop/activity/', addStopController.newActivity)
router.get('/:pathId/addStop/food/', addStopController.newFood)
router.get('/:pathId/addStop/gasStation/', addStopController.newGasStation)
router.get('/:pathId/addStop/scenery/', addStopController.newScenery)


router.post('/:pathId/addStop/activity', addStopController.activity)
router.post('/:pathId/addStop/food', addStopController.food)
router.post('/:pathId/addStop/gasStation', addStopController.gasStation)
router.post('/:pathId/addStop/scenery', addStopController.scenery)

router.get('/path/:pathId', pathController.show)
router.get('/activity/:activityId', activityController.show)
router.get('/activity/delete/:activityId', activityController.delete)
router.get('/food/delete/:activityId', activityController.delete)
router.get('/gasStation/delete/:activityId', activityController.delete)
router.get('/scenery/delete/:activityId', activityController.delete)

router.get('/food/:foodId', foodController.show)
router.get('/gasStation/:gasStationId', gasStationController.show)
router.get('/scenery/:sceneryId', sceneryController.show)

// then
// when you click on the add button you take that object id and add it to the path id.
// because of this we need to see the two ids in the url



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