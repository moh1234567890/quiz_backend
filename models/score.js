const mongoose=require("mongoose")


const scoreSchema=new  mongoose.Schema({
    studentname:{
        type:String,
        required:true

    },
    studentclass:{
        type:Number,
        required:true
    },
    studentroll:{
        type:Number,
        required:true
    },
    finalscore:{
        type:Number,
        required:true
        
        
    }
})
module.exports=mongoose.model('Score',scoreSchema)