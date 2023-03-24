const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {type:String, required: true},
    assignee:{type:String,required: true},
    status: {type:Boolean,required: true},
    types:{type:String, default:0}
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports= TaskModel;