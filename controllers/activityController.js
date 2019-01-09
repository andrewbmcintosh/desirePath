const Activitys = require("../models/Activity")

const activityController = {
    index: (req, res) => {
        Activitys.find({}).then(activitys => {
            res.render('app/index', { activitys })
        })
    }, new: (req, res) => {
        res.render("app/newActivity")
    },
    create: (req, res) => {
        console.log(req.body)
        Activitys.create({
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            type: req.body.type,
            description: req.body.description
        }).then(newpath => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const activityId = req.params.activityId
        Activitys.findById(activityId).then((activitys) => {
            console.log(activitys)
            res.render('app/showActivity', { activitys })
        })
    }
}

module.exports = activityController