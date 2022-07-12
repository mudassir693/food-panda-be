const router = require('express').Router()
const {addNewUser,getUsers,updUser} = require('../functions/userFunction')

router.post('/addUser',addNewUser)

router.get('/',getUsers)

router.put('/update/:id',updUser)

module.exports = router