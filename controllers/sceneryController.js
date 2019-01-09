const Scenery = require("../models/Scenery")

const sceneryController = {
    index: (req, res) => {
        Scenery.find({}).then(scenery => {
            res.render('app/index', { scenery })
        })
    }, new: (req, res) => {
        res.render("app/newScenery")
    },
    create: (req, res) => {
        console.log(req.body)
        Scenery.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            foodOptions: req.body.foodOptions,
            description: req.body.description
        }).then(newpath => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const sceneryId = req.params.sceneryId
        Scenery.findById(sceneryId).then((scenery) => {
            console.log(scenery)
            res.render('app/showScenery', { scenery })
        })
    }
}

module.exports = sceneryController