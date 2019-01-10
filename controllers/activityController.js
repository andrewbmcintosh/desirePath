const Activitys = require("../models/Activity")
const Paths = require("../models/Path")

const activityController = {
    index: (req, res) => {
        Activitys.find({}).then(activitys => {
            res.render('app/indexActivity', { activitys })
        })
    }, new: (req, res) => {
        res.render("app/newActivity")
    },
    create: (req, res) => {
        const pathId = req.params.pathId
        console.log(req.body)
        const newObject = {
            name: req.body.name,
            img: req.body.img,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            type: req.body.type,
            description: req.body.description
        }
        Activitys.create({ newObject }).then((newlyCreatedObject) => {
            console.log(newlyCreatedObject._id)
            Paths.findByIdAndUpdate(pathId)
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