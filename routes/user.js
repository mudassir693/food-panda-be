const router = require('express').Router()
const {addNewUser,getUsers} = require('../functions/userFunction')

router.post('/addUser',addNewUser)

router.get('/',getUsers)

module.exports = router