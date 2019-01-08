const Path = require('../models/Path')

Path.deleteMany({}).
    then(() => {
        return Path.create({
            name: "fastest way to the shore",
            destination: "Destin",
            startingPoint: "Atlanta",
            description: "for so long human kind has sought to find the answer to lifes greatest question, the fastest way to the beach. Well... heres the answer.",
            stops: "loves, preesters pecans, the shore",
            loggedBy: "Andrew B. McIntosh"
            // value:
        }, {
                name: "scenic route to Montreat",
                destination: "Montreat",
                startingPoint: "Atlanta",
                description: "great drive to North Carolina. Drive through North Georgia.",
                stops: "The Ravine, Athens Y camp",
                loggedBy: "Andrew B. McIntosh"
            })
    }).then(() => {
        return activity.create({
            name: "Fishing on Lake Eufala",
            img: ,
            address: "Lake Eufala",
            city: "Eufala",
            state: "AL",
            type: "Fishing",
            description: "no better place to catch them ol crimson fish",
        })
    }).then(() => {
        return activity.food({
            name: "Fishing on Lake Eufala",
            img: ,
            address: "Lake Eufala",
            city: "Eufala",
            state: "AL",
            type: "Fishing",
            description: "no better place to catch them ol crimson fish",
        })
    })
