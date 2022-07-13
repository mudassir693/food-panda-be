const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const morgan = require('morgan')
const connect_DB = require('./config/DB_Config')



const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
// DB COnnection
connect_DB()

app.get('/',(req,res)=>{
    try {
        return res.status(200).json({data:"foodpanda-be is running",error:false})
    } catch (error) {
        console.log(error);
        return res.status(200).json({data:error,error:true})
    }
})

app.use('/api/users/',require('./routes/user'))
app.use('/api/resturants/',require('./routes/resturant'))
app.use('/api/products/',require('./routes/products'))

const port = process.env.PORT || 5000



app.listen(port,()=>{
    if(port == '5000'){
        console.log("server is running on development mode")
    }else{
        console.log("server is running on production mode")
    }
    console.log(`server running on port: ${port}`)
})

module.exports = app