const Product = require('../models/Product')


const addProduct = async(req,res)=>{
    try {
        const {Image, Title, ResturantId, CreatedDate, Price, Rating, Category, Description} = req.body
        const isProductAvailable = await Product.findOne({$and:[{Title},{ResturantId}]})
        if(isProductAvailable){
            return res.status(400).json({data:"this product is already available in this resturant",error:true})
        }
        const newProduct = new Product({
            Image, Title, ResturantId, CreatedDate, Price, Rating, Category, Description
        })

        const addProdResp = await newProduct.save()
        return res.status(200).json({data:addProdResp,error:false})
    } catch (error) {
        console.log("addProductError: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const getAllProducts = async(req,res)=>{
    try {
        const getData = await Product.find()

        return res.status(200).json({data:getData,error:false})
    } catch (error) {
        console.log("get all product Error: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const getProductById = async(req,res)=>{
    try{
        const resp = await Product.findById(req.params.id)

        return res.status(200).json({data:resp,error:false})
    }catch (error) {
        console.log("get Prod by Id Error: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const getProductByIdResturant = async(req,res)=>{
    try {
        const resp = await Product.find({ResturantId: req.params.id})

        return res.status(200).json({data:resp,error:false})
    } catch (error) {
        console.log("get Prod by Id Error: ", error);
        return res.status(500).json({data:error,error:true})    
    }
}

const updateProduct = async(req,res)=>{
    try {

        const updResturant = await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        console.log('required object: ',updResturant,' body: ',req.body);

        return res.status(200).json({data:updResturant,error:false})
    } catch (error) {
        console.log("update product error: ", error);
        return res.status(500).json({data:error,error:true})
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const resp = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({data:"Product deleted sucessfully",error:false})
    } catch (error) {
        console.log("delete product Error: ", error);
        return res.status(500).json({data:error,error:true})
    }
}


module.exports = {
    addProduct,
    getAllProducts,
    getProductById, 
    updateProduct, 
    deleteProduct,
    getProductByIdResturant
}