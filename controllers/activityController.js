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
        // could i make it so that the button actually creates an empty object and 
        // then the form is actually just updating the document with that information
        // including updating the other object with that ID
        // i can have that button be a post that links to an action that then is
        // redirected to the update of that document
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
    },
    delete: (req, res) => {
        const activityId = req.params.activityId
        Activitys.findByIdAndDelete(activityId).then(() => {
            res.redirect('/activity')
        })


    }
}

module.exports = activityController