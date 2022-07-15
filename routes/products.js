const router = require('express').Router();
const {addProduct,getAllProducts,getProductById, updateProduct, deleteProduct, getProductByIdResturant} = require('../functions/productFunction')

// add Resturant
router.post('/add',addProduct)
// get all Products
router.get('/get',getAllProducts)
// get Product by id
router.get("/getById/:id",getProductById)
// get by resturants
router.get('/getByResturant/:id',getProductByIdResturant)
// update Product
router.put('/update/:id',updateProduct)
// delete Product
router.delete('/delete/:id',deleteProduct)

module.exports = router