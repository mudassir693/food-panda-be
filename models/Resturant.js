const mongoose = require('mongoose')

const resturantSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Address:{
        type:String
    },
    Image:{
        type:String
    },
    Description:{
        type:String
    },
    Rating:{
        type:String
    },
    CoOrdinates:{
        lat:{
            type:String
        },
        lon:{
            type:String
        }
    },
    Category:{
        type:String
    },
    CreatedDate:{
        type:Date
    }
})

module.exports = mongoose.model('resturants',resturantSchema)