const { default: mongoose } = require("mongoose");
// Creating User Schema
const userSchema = new mongoose.Schema({
    name:{type:String},
    email : {type:String},
    passward : {type:String},
    Qualification: {type:String}
})

// Creating User Model
const userModel = mongoose.model("userModel",userSchema)
 module.exports = {userModel}