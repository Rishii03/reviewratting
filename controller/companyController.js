const { companyModel } = require("..Models/companyModel")


let createcompany=async(req,res)=>{
let oldCompany = await companyModel.findone({companyName:req.body.companyName})
if(oldCompany){return res.status(401).send({success:false,message:"Company Already exist"})}
    //res.send("running")
    //console.log(req.body)
    let newcompany = await companyModel.create(req.body)
    res.status(201).send({success:true,message:"Company created",data:newcompany})
}

let companylist =async(req,res)=>{
    let allcompany = await companyModel.find()
    //console.log(allcompany.length)
    if(allcompany.length==0){return res.status(404).send({success:false,message:"no company found"})}
    res.status(200).send({success:true,message:"all company",total_company:allcompany.length,data:allcompany})
}

module.exports={createcompany,companylist}