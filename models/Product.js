const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Image:{
        type:String
    },
    Title:{
        type:String
    },
    ResturantId:{
        type:String
    },
    CreatedDate: {
        type:String
    },
    Price:{
        type:Number
    },
    Rating:{
        type:String
    },
    Category:{
        type:String
    },
    Description:{
        type:String
    }
})

module.exports = mongoose.model('products',productSchema)