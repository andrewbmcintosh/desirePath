Path = require("../models/Path")

const pathController = {
    index: (req, res) => {
        Path.find({}).then(paths => {
            res.render('app/index', { links })
        })
    }
}