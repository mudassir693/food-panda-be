const mongoose = require('mongoose')

const connectDB = ()=>{
    try {
        // password: 'somedimmyscript'
        // name: mudassir
        // localhost:27017
        mongoose.connect(process.env.MONGO_URI).then(resp=>{
            console.log('mongodb sucessfully connected')
        })
    } catch (error) {
        console.log('db_connection error: ',error);
    }
}

module.exports = connectDB
