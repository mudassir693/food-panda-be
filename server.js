const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    try {
        return res.status(200).json({data:"foodpanda-be is running",error:false})
    } catch (error) {
        console.log(error);
        return res.status(200).json({data:error,error:true})
    }
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})

module.exports = app