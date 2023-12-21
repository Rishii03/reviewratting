const {default: mongoose } = require("mongoose")

const reviewSchema = new mongoose.Schema({
        subject: {
            type: String,
            require: true,
        },
        review: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            require: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        company_Id: {
            type: mongoose.Schema.Types.objectId,
            ref: "companyModel",
        },
        user_id: {
            type: monogoose.schema.types.objected,
            ref: "companyModel"
        },
    }, { timestampt:true})


let reviewmodel = new mongoose.model("reviewModel", reviewSchema);
module.exports = {reviewModel}