const Paths = require("../models/Path")
const GasStation = require("../models/GasStation")

const gasStationController = {
    create: (req, res) => {
        console.log(req.body)
        GasStation.create({
            name: req.body.name,
            img:req.body.img,
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

module.exports