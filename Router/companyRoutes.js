const express = require('express')
const {createcompany,companylist } = require('../controllers/companycontroller');
const companyRoutes=express.Router();

// companyRoutes.get("/",(req,res)=>{
//     res.send("companyRoutes testing")
// })

companyRoutes.post("/",createcompany)
companyRoutes.post("/companylist",companylist)

module.exports={companyRoutes}