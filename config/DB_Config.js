const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb sucessfully connected')
    } catch (error) {
        console.log('db_connection error: ',error);
    }
}

module.exports = connectDB