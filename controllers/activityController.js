const Activity = require("../models/Activity")

const activityController = {
    index: (req, res) => {
        Activity.find({}).then(activity => {
            res.render('app/index', { acitivity })
        })
    }, new: (req, res) => {
        res.render("app/newActivity")
    },
    create: (req, res) => {
        console.log(req.body)
        Activity.create({
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
    },
    show: (req, res) => {
        const activityId = req.params.activityId
        Activity.findById(activityId).then((activity) => {
            console.log(activity)
            res.render('app/showActivity', { activity })
        })
    }
}

module.exports = activityController