const Food = require("../models/Food")

const foodController = {
    index: (req, res) => {
        Food.find({}).then(food => {
            res.render('app/indexFood', { food })
        })
    }, new: (req, res) => {
        res.render("app/newFood")
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
    },
    show: (req, res) => {
        const foodId = req.params.foodId
        Food.findById(foodId).then((food) => {
            console.log(food)
            res.render('app/showFood', { food })
        })
    }
}

module.exports = foodController