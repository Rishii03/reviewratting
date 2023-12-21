const express = require('express')
const { createUser } = require('../controller/userController')


const userRoutes = express.Router()
// Getting data on the sever
userRoutes.get('/lokendra',(req,res) =>{
    res.send("heyyyy")
} )


// Sending data to the server
userRoutes.post('/lokendra', createUser)

module.exports = {userRoutes}