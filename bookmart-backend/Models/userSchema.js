const mongoose=require('mongoose')

const userScema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
  
    password:{
        type:String,
        require:true
    }
})
const users =mongoose.model("users",userScema)
module.exports=users