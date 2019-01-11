const GasStation = require("../models/GasStation")

const gasStationController = {
    index: (req, res) => {
        GasStation.find({}).then(gasStation => {
            res.render('app/indexGasStation', { gasStation })
        })
    }, new: (req, res) => {
        res.render("app/newGasStation")
    },
    create: (req, res) => {
        console.log(req.body)
        GasStation.create({
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
        const gasStationId = req.params.gasStationId
        GasStation.findById(gasStationId).then((gasStation) => {
            console.log(gasStation)
            res.render('app/showGasStation', { gasStation })
        })
    },
    delete: (req, res) => {
        const gasStationId = req.params.gasStationId
        GasStation.findByIdAndDelete(gasStationId).then(() => {
            res.redirect('/gasStation')
        })


    }
}

module.exports = gasStationController