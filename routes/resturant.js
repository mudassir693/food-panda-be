const router = require('express').Router();
const {addResturant,getAllResturants,getResturantById, updateResturant, deleteResturant, getResturantByName} = require('../functions/resturantFunction')

// add Resturant
router.post('/add',addResturant)
// get all resturants
router.get('/get',getAllResturants)
// get resturant by id
router.get("/getById/:id",getResturantById)
// update resturant
router.put('/update/:id',updateResturant)
// delete resturant
router.delete('/delete/:id',deleteResturant)
// get resturant by name
router.get('/getByName/:name',getResturantByName)

module.exports = router