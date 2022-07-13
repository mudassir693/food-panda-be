const Resturant = require('../models/Resturant')


const addResturant = async(req,res)=>{
    try {
        const {Name, Address, Image, Description, Rating, CoOrdinates, Category} = req.body
        const isResturantAvailable = await Resturant.findOne({Name})
        if(isResturantAvailable){
            return res.status(400).json({data:"this resturant is already register",error:true})
        }
        const newresturant = new Resturant({
            Name, Address, Image, Description, Rating, CoOrdinates, Category
        })

        const addRestResp = await newresturant.save()
        return res.status(200).json({data:addRestResp,error:false})
    } catch (error) {
        console.log("addRestError: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const getAllResturants = async(req,res)=>{
    try {
        const getData = await Resturant.find()

        return res.status(200).json({data:getData,error:false})
    } catch (error) {
        console.log("addRestError: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const getResturantById = async(req,res)=>{
    try{
        const resp = await Resturant.findById(req.params.id)

        return res.status(200).json({data:resp,error:false})
    }catch (error) {
        console.log("addRestError: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const updateResturant = async(req,res)=>{
    try {
        const {Name, ...others} = req.body

        const updResturant = await Resturant.findByIdAndUpdate(req,params.id,{$set:others},{new:true})

        return res.status(200).json({data:updResturant,error:true})
    } catch (error) {
        console.log("addRestError: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const deleteResturant = async(req,res)=>{
    try {
        const resp = await Resturant.findByIdAndDelete(req.params.id)
        return res.status(200).json({data:"Resturant deleted sucessfully",error:false})
    } catch (error) {
        console.log("addRestError: ", error);
        return res.status(500).json({data:error,error:true})
    }
}


module.exports = {
    addResturant,
    getAllResturants,
    getResturantById, 
    updateResturant, 
    deleteResturant
}