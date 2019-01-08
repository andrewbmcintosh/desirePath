const Path = require('../models/Path')

Path.deleteMany({}).
    then(() => {
        return Path.create({
            name: "fastest way to the shore",
            destination: "Destin",
            startingPoint: "Atlanta",
            description: "for so long human kind has sought to find the answer to lifes greatest question, the fastest way to the beach. Well... heres the answer."
            
        })
    })