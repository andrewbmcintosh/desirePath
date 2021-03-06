const Paths = require("../models/Path")
const Activitys = require("../models/Activity")
const Food = require("../models/Food")
const Scenery = require("../models/Scenery")
const GasStation = require("../models/GasStation")



const pathController = {
    index: (req, res) => {
        Paths.find({}).then(paths => {
            res.render('app/index', { paths })
        })
    },
    new: (req, res) => {
        res.render("app/newPath")
    },
    create: (req, res) => {
        console.log(req.body)
        Paths.create({
            name: req.body.name,
            destinationAddress: req.body.destinationAddress,
            destinationCity: req.body.destinationCity,
            destinationState: req.body.destinationState,
            startingAddress: req.body.startingAddress,
            startingCity: req.body.startingCity,
            startingState: req.body.startingState,
            description: req.body.description,
            activity: req.body.activity,
            food: req.body.food,
            loggedBy: req.body.loggedBy
            // value: req.body.value ** commented out to figure out how number works
        }).then(newPath => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const pathId = req.params.pathId
        // can i add another populate after .populate('activity')? *** YES
        // Paths.findById(pathId).populate('activity').then((paths) => {
        Paths.findById(pathId).populate('activity').populate('food').populate('gasStation').populate('scenery').then((paths) => {
            console.log(paths)
            res.render('app/showPath', { paths })
        })
        // Paths.findById(pathId).populate('food').then((paths) => {
        //     console.log(paths)
        //     res.render('app/showPath', { paths })
        // })
    }
}

module.exports = pathController