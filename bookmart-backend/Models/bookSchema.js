const mongoose = require('mongoose')

const booksSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true    
    },
    genres:{
        type:String,
        require:true
        
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
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
const books =mongoose.model("books",booksSchema)


module.exports=books