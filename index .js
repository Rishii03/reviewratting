const express  = require('express')
const mongoose = require('mongoose')
const { userRoutes } = require('./Router/userRouter')


const app = express()
PORT = 7000
app.use(express.json())

// Connecting Database 
mongoose.connect('mongodb://127.0.0.1:27017/lokendra')
.then(()=>console.log("Connected Successfully!!!")).catch(()=> console.log("Not Connected"))

// Routing 
app.use('/', userRoutes)

// Creating Server
app.listen(PORT, ()=>{
    console.log(`server is Running at ${PORT}`)
})