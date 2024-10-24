const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    username:{
        type:String,
        required:[true,"username is required"],
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
      

})
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });
module.exports=mongoose.model("user",userSchema);