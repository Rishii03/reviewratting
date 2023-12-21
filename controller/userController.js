const { userModel } = require("../Models/userModel")


const createUser = async(req,res)=>{
    // console.log(req.body)
    const data = await userModel.create(req.body)
    console.log(data)
    res.send(data)
} 

module.exports = {createUser}