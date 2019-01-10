const Paths = require("../models/Path")
const Activitys = require("../models/Activity")
const Food = require("../models/Food")
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
        }).then((newActivity) => {
            Paths.findByIdAndUpdate(pathId, { $push: { activity: newActivity._id } }).then(() => {
                console.log(newActivity._id)
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
        }).then((newFood) => {
            Paths.findByIdAndUpdate(pathId, { $push: { food: newFood._id } }).then(() => {
                console.log(newFood._id)
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
        GasStation.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            foodOptions: req.body.foodOptions,
            description: req.body.description
        }).then((gasStation) => {
            Paths.findByIdAndUpdate(pathId, { $push: { stops: gasStation._id } }).then(() => {
                console.log(gasStationId)
                res.redirect(`/${pathId}/path`)
            })

        })

    }, newScenery: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/pathNewScenery", { pathId: pathId })
    },
    scenery: (req, res) => {
        const pathId = req.params.pathId
        const sceneryId = req.params.sceneryId
        Scenery.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            foodOptions: req.body.foodOptions,
            description: req.body.description
        }).then((scenery) => {
            Paths.findByIdAndUpdate(pathId, { $push: { stops: scenery._id } }).then(() => {
                console.log(sceneryId)
                res.redirect(`/${pathId}/path`)
            })
        })

    },
}

module.exports = addStopController