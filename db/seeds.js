const Path = require('../models/Path')
const Activity = require('../models/Activity')
const Food = require('../models/Food')
const GasStation = require('../models/GasStation')
const Scenery = require('../models/Scenery')



Path.deleteMany({}).
    then(() => {
        return Path.create({
            name: "fastest way to the shore",
            destinationAddress: "357 Main Park Road",
            destinationCity: "Santa Rosa Beach",
            destinationState: "FL",
            startingAddress: "657 Ponce De Leon Ave",
            startingCity: "Atlanta",
            startingState: "GA",
            description: "for so long human kind has sought to find the answer to lifes greatest question, the fastest way to the beach. Well... heres the answer.",
            activity: [],
            food: [],
            gasStation: [],
            scenery: [],
            loggedBy: "Andrew B. McIntosh"
            // value:
        }, {
                name: "scenic route to Montreat",
                destinationAddress: "401 Assembly Drive",
                destinationCity: "Montreat",
                destinationState: "NC",
                startingAddress: "657 Ponce De Leon Ave",
                startingCity: "Atlanta",
                startingState: "GA",
                description: "great drive to North Carolina. Drive through North Georgia.",
                activity: [],
                food: [],
                gasStation: [],
                scenery: [],
                loggedBy: "Andrew B. McIntosh"
            })
    })

Activity.deleteMany({}).
    then(() => {
        return Activity.create({
            name: "Fishing on Lake Eufala",
            img: "--Picture of lake--",
            address: "Lake Eufala",
            city: "Eufala",
            state: "AL",
            type: "Fishing",
            description: "no better place to catch them ol crimson fish",
        })
    })
Food.deleteMany({}).
    then(() => {
        return Food.create({
            name: "Fried Chicken Stand",
            img: "--picture of a parking log",
            address: "Big Lots Parking Lot",
            city: "Dothan",
            state: "AL",
            category: "Southern/Almost Cajun",
            description: "if your lucky youll be driving by the big lots when this stand is open. Its a trailer with a two person team. Fried chicken is incredible.",
        })
    })
GasStation.deleteMany({}).
    then(() => {
        return GasStation.create({
            name: "Love's Travel Stop",
            img: "--picture of a loves--",
            address: "431 Main Street",
            city: "Shorter",
            state: "AL",
            foodOptions: "Four different rollers, Subway, Mcdonalds",
            description: "This is one of the best Love's in the Southeast. Cheapest Gas. The last quality one you will see on the way to 30A.",
        })
    })
Scenery.deleteMany({}).
    then(() => {
        return Scenery.create({
            name: "View over Western Lake at Dunes on the Gulf Coast",
            img: "--picture of dunes--",
            address: "30°19'39.5 N 86°08'52.2 W",
            city: "Seaside",
            state: "FL",
            description: "One of the most beautiful sights to see is driving on the little bridge over Western Lake on 30A looking towards the gulf. If you catch the time right you can see the dunes change color with the sunset. ",
        })
    })
