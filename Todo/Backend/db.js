const mongoose=require("mongoose");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todos=mongoose.model('todos',todoSchema);
module.exports={todos};