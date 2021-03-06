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
        }).then((path) => {
            const pathActivity = Activity.create({
                name: "Fishing on Lake Eufala",
                img: "--Picture of lake--",
                address: "Lake Eufala",
                city: "Eufala",
                state: "AL",
                type: "Fishing",
                description: "no better place to catch them ol crimson fish",
            }).then((activity) => {
                path.activity.push(activity)
            })
            const pathFood = Food.create({
                name: "Fried Chicken Stand",
                img: "--picture of a parking log",
                address: "Big Lots Parking Lot",
                city: "Dothan",
                state: "AL",
                category: "Southern/Almost Cajun",
                description: "if your lucky youll be driving by the big lots when this stand is open. Its a trailer with a two person team. Fried chicken is incredible.",
            }).then((food) => {
                path.food.push(food)
            })
            const pathGasStation = GasStation.create({
                name: "Love's Travel Stop",
                img: "--picture of a loves--",
                address: "431 Main Street",
                city: "Shorter",
                state: "AL",
                foodOptions: "Four different rollers, Subway, Mcdonalds",
                description: "This is one of the best Love's in the Southeast. Cheapest Gas. The last quality one you will see on the way to 30A.",
            }).then((gasStation) => {
                path.gasStation.push(gasStation)
            })
            const pathScenery = Scenery.create({
                name: "View over Western Lake at Dunes on the Gulf Coast",
                img: "--picture of dunes--",
                address: "30°19'39.5 N 86°08'52.2 W",
                city: "Seaside",
                state: "FL",
                description: "One of the most beautiful sights to see is driving on the little bridge over Western Lake on 30A looking towards the gulf. If you catch the time right you can see the dunes change color with the sunset. ",
            }).then((scenery) => {
                path.scenery.push(scenery)
            })

            Promise.all([pathActivity, pathFood, pathGasStation, pathScenery]).then(() => {
                path.save()
            })
        })
        //  {
        //         name: "scenic route to Montreat",
        //         destinationAddress: "401 Assembly Drive",
        //         destinationCity: "Montreat",
        //         destinationState: "NC",
        //         startingAddress: "657 Ponce De Leon Ave",
        //         startingCity: "Atlanta",
        //         startingState: "GA",
        //         description: "great drive to North Carolina. Drive through North Georgia.",
        //         activity: [],
        //         food: [],
        //         gasStation: [],
        //         scenery: [],
        //         loggedBy: "Andrew B. McIntosh"
        //     })
    })
Path.create({
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
Activity.deleteMany({}).
    then(() => {
        return Activity.create({
            name: "Rafting on the Ocoee",
            img: "--Picture of Rafting--",
            address: "Ocoee River",
            city: "Cleveland",
            state: "TN",
            type: "Rafting",
            description: "grab some friends and a raft. Its a blast.",
        })
    })
Food.deleteMany({}).
    then(() => {
        return Food.create({
            name: "BeirGarden",
            img: "--picture of a Beer Garden",
            address: "Apples",
            city: "Helen",
            state: "GA",
            category: "Good ole apples",
            description: "great spot to go in the fall",

        })
    })
GasStation.deleteMany({}).
    then(() => {
        return GasStation.create({
            name: "Love's Travel Stop",
            img: "--picture of a loves--",
            address: "Main Street",
            city: "Cartersville",
            state: "GA",
            foodOptions: "This is the pinnacle it has a McDonalds and Wendys",
            description: "One of the Top Love's Trave Stops in Georgia",
        })
    })
Scenery.deleteMany({}).
    then(() => {
        return Scenery.create({
            name: "View From Lookout Mountain",
            img: "--picture from Lookout--",
            address: "Covenant College",
            city: "Lookout Mtn.",
            state: "TN",
            description: " Beautiful view towards the west of Alabama and the valley below.",
        })
    })
