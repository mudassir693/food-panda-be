const router = require('express').Router()
const {addNewUser,getUsers,updUser,deleteUser} = require('../functions/userFunction')

router.post('/addUser',addNewUser)

router.get('/',getUsers)

router.put('/update/:id',updUser)

router.delete('/delete/:id',deleteUser)

module.exports = router