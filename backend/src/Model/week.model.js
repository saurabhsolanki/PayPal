const mongoose = require("mongoose")

const weekSchema = new mongoose.Schema({
    sprint: {type:String, required: true},
})

const weekModel = mongoose.model("week",weekSchema)

module.exports= weekModel;