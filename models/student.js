const mongoose=require("mongoose")


const studentSchema=new  mongoose.Schema({
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
   studentemail:{
       type:String,
       required:true
   },
   file:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('Student',studentSchema)