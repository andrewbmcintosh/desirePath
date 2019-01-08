Paths = require("../models/Path")

const pathController = {
    index: (req, res) => {
        Paths.find({}).then(paths => {
            res.render('app/index', { paths })
        })
    },
    create: (req, res) => {
        console.log(req.body)
        Paths.create({
            name: req.body.name,
            destination: req.body.destination,
            startingPoint: req.body.startingPoint,
            description: req.body.description,
            stops: req.body.stops,
            loggedBy: req.body.loggedBy
            // value: req.body.value ** commented out to figure out how number works
        }).then(newPath => {
            res.redirect('/')
        })
    }
}

module.exports = pathController