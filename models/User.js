const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    PhoneNumber:{
        type:String
    },
    Address:{
        type:String
    },
    CreatedDate:{
        type:Date
    }
})

module.exports = mongoose.model('users',userSchema)