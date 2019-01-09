const Scenery = require("../models/Scenery")

const sceneryController = {
    index: (req, res) => {
        Scenery.find({}).then(scenery => {
            res.render('app/index', { scenery })
        })
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
    }
}

module.exports = sceneryController