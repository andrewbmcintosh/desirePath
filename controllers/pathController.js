Path = require("../models/Path")

const pathController = {
    index: (req, res) => {
        Path.find({}).then(paths => {
            res.render('app/index', { links })
        })
    },
    create: (req, res) => {
        console.log(req.body)
        Path.create({
            
        })
    }
}