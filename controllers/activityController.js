const Paths = require("../models/Path")
const Activity = require("../models/Activity")

const activityController = {
    index: (req, res) => {
        Paths.find({}).then(activity => {
            res.render('app/index', { acitivity })
        })
    },
    create: (req, res) => {
        console.log(req.body)
        GasStation.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            type: req.body.foodOptions,
            description: req.body.description
        }).then(newpath => {
            res.redirect('/')
        })
    }
}

module.exports = activityController