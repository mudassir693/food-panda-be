const mongoose = require('mongoose')

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI).then(resp=>{
            console.log('mongodb sucessfully connected')
        })
    } catch (error) {
        console.log('db_connection error: ',error);
    }
}

module.exports = connectDB