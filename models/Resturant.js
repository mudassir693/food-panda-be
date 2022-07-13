const mongoose = require('mongoose')

const resturantSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Address:{
        type:STring
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
    }
})

module.exports = mongoose.model('resturants',resturantSchema)