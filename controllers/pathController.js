const Paths = require("../models/Path")

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
            stops: req.body.stops,
            loggedBy: req.body.loggedBy
            // value: req.body.value ** commented out to figure out how number works
        }).then(newPath => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const pathId = req.params.pathId
        Paths.findById(pathId).then((paths) => {
            console.log(paths)
            res.render('app/showPath', { paths })
        })
    }
}

module.exports = pathController