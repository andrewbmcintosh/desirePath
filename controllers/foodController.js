const Food = require("../models/Food")

const foodController = {
    index: (req, res) => {
        Food.find({}).then(food => {
            res.render('app/index', { food })
        })
    },
    create: (req, res) => {
        console.log(req.body)
        Food.create({
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

module.exports = foodController