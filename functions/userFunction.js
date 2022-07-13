const User = require('../models/User')

// function to add new User
const addNewUser = async(req,res)=>{
    try {
        const {Name,Email,Address,PhoneNumber,CreatedDate} = req.body

        const isUserAvailable = await User.findOne({Email})
        if(isUserAvailable){
            return res.status(400).json({data:"User with this phone Number is already there.",error:true})
        }
        const newUser = new User({
            Name,
            Email,
            Address,
            PhoneNumber,
            CreatedDate,
            CoOrdinates
        }) 
        const addUserResp = await newUser.save()
        return res.status(201).json({data:addUserResp,error:false})
    } catch (error) {
        return res.status(500).json({data:error,error:true})
    }
}

const getUsers = async (req,res)=>{
    try {
        const userResp = await User.find()
        return res.status(200).json({data:userResp,error:false})
    } catch (error) {
        return res.status(500).json({data:error,error:true})
    }
}

const updUser = async(req,res)=>{
    try {
        const {Email,...others} = req.body
        const updUser = await User.findByIdAndUpdate(req.params.id,{$set:others},{new:true})
        return res.status(200).json({data:updUser,error:false})
    } catch (error) {
        return res.status(500).json({data:error,error:true})
    }
}

const deleteUser = async (req,res)=>{
    try {
        const resp = await User.findByIdAndRemove(req.params.id)
        return res.status(200).json({data:resp,error:false})
    } catch (error) {
        return res.status(500).json({data:error,error:true})
    }
}

module.exports = {
    addNewUser,
    getUsers,
    updUser,
    deleteUser
}