const mngoose= require('mongoose')

const companySchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            require: true,
        },
        location: {
            type: String,
            require: true,
            default: false,
        },
        city: {
            type: String,
            require: true,
        },
        founded: {
            type: String,
            require: true,
        },
        isActive: {
            type: Boolean,
            require: true,
        },
        userId: {
            type: mongoose.Schema.Types.objectId,
            require: true,
            ref: "userModel",
        },
        company_logo: {
            type: String,
        },
    },
    { timestampt: true }
);

let companyModel = new mongoose.model("companyModel", companySchema);
module.exports = {companyModel};