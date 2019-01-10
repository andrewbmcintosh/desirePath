const Paths = require("../models/Path")
const Activitys = require("../models/Activity")
const Food = require("../models/Activity")

const Scenery = require("../models/Scenery")
const GasStation = require("../models/GasStation")


const addStopController = {
    new: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/newAddStop", { pathId: pathId })
    }, newActivity: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/pathNewActivity", { pathId: pathId })
    },
    activity: (req, res) => {
        const pathId = req.params.pathId
        const activityId = req.params.activityId
        Activitys.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            type: req.body.type,
            description: req.body.description
        }).then((activity) => {
            Paths.findByIdAndUpdate(pathId, { $push: { stops: activity._id } }).then(() => {
                console.log(activityId)
                // below might give problems, need to see where it is redirecting
                res.redirect(`/${pathId}/path`)
            })
        })
    }, newFood: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/pathNewFood", { pathId: pathId })
    },
    food: (req, res) => {
        const pathId = req.params.pathId
        const foodId = req.params.foodId
        Food.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            foodOptions: req.body.foodOptions,
            description: req.body.description
        }).then((food) => {
            Paths.findByIdAndUpdate(pathId, { $push: { stops: food._id } }).then(() => {
                console.log(foodId)
                res.redirect(`/${pathId}/path`)
            })
        })

    }, newGasStation: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/pathNewGasStation", { pathId: pathId })
    },
    gasStation: (req, res) => {
        const pathId = req.params.pathId
        const gasStationId = req.params.gasStationId
        Paths.findByIdAndUpdate(pathId, { $push: { stops: gasStationId } }).then(() => {
            console.log(gasStationId)
        })
    }, newScenery: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/pathNewScenery", { pathId: pathId })
    },
    scenery: (req, res) => {
        const pathId = req.params.pathId
        const sceneryId = req.params.sceneryId
        Paths.findByIdAndUpdate(pathId, { $push: { stops: sceneryId } }).then(() => {
            console.log(sceneryId)
        })
    },
}

module.exports = addStopController