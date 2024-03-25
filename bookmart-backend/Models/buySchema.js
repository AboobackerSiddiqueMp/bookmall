const mongoose = require('mongoose')

const buySchema= new mongoose.Schema({
    title:{
        type:String,
        require:true    
    },
    price:{
        type:Number,
        require:true
    },
    
    bookimage:{
        type:String,
        require:true    
    },
    userId:{
        type:String,
        require:true    
    
    }
    

    
})
const buys =mongoose.model("buys",buySchema)


module.exports=buys