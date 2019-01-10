const Paths = require("../models/Path")
const Activitys = require("../models/Activity")

const addStopController = {
    new: (req, res) => {
        const pathId = req.params.pathId
        res.render("app/newAddStop", { pathId: pathId })
    },
    activity: (req, res) => {
        const pathId = req.params.pathId
        const activityId = req.params.activityId
        Paths.findByIdAndUpdate(pathId, { $push: { stops: activityId } }).then(() => {
            console.log(activityId)
            // below might give problems, need to see where it is redirecting
            res.redirect(`/${pathId}/path`)
        })
    },
    food: (req, res) => {
        const pathId = req.params.pathId
        const foodId = req.params.foodId
        Paths.findByIdAndUpdate(pathId, { $push: { stops: foodId } }).then(() => {
            console.log(foodId)
        })
    },
    gasStation: (req, res) => {
        const pathId = req.params.pathId
        const gasStationId = req.params.gasStationId
        Paths.findByIdAndUpdate(pathId, { $push: { stops: gasStationId } }).then(() => {
            console.log(gasStationId)
        })
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