Path = require("../models/Path")

const pathController = {
    index: (req, res) => {
        Path.find({}).then(paths => {
            res.render('app/index', { links })
        })
    },
    create: (req, res) => {
        console.log(req.body)
        Path.create({
            name: req.body.name,
            destination: req.body.destination,
            startingPoint: req.body.startingPoint,
            description: req.body.description,
            stops: req.body.stops,
            loggedBy: req.body.loggedBy,
            value: req.body.value
        }).then(newPath => {
            res.redirect('/')
        })
    }
}

module.exports = pathController