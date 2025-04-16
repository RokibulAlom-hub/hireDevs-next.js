const { default: mongoose } = require("mongoose");

const Newjobs = mongoose.Schema({
    title: String,
    company: String,
    location: String,
    requirments:String,
    type: String,
    description:String,
},{
    timestamps: true,
})
export default mongoose.models.Newjobs || mongoose.model("Newjobs", Newjobs)