const express=require('express')
const router=express.Router()
var multer=require("multer")
var fs=require("fs")
var path=require("path")
const Student=require("../models/student")

const nodemailer=require("nodemailer")
var imageData=Student.find({});











router.get('/viewStudent',async(req,res)=>{
    try{
        const students=await Student.find()
        res.json(students)
    }catch(err){
        res.send("error"+err)
    }
    
})

router.post('/studentroll',async(req,res)=>{
    try{
        const student=await Student.find({studentroll:req.body.studentroll})
        res.json(student)
    }catch(err){
        res.send("error"+err)
    }
    
})


router.post('/login',async(req,res)=>{
    try{
        const student=await Student.find({$and:[{ studentname:req.body.studentname,studentroll:req.body.studentroll}]})
        if(student.length>0){
            console.log("login success")
            res.json(student)
        }
        else{
            res.json(student)
            console.log("failed")
        }
    }catch(err){
        res.send("error"+err)
        
    }
    
    
})




const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
        console.log(file.originalname)
    }
})
const upload=multer({
    storage:storage
})




router.post("/",async(req,res)=> {
    const student=new Student({
        studentname:req.body.studentname,
        studentclass:req.body.studentclass,
        studentroll:req.body.studentroll,
        studentemail:req.body.studentemail,
        file:req.body.file
        
        
    })
    try{
        

          const r1=await student.save();
          var transporter=nodemailer.createTransport({
              service:'gmail',
              auth:{
                  user:'mohitpandey126@gmail.com',
                  pass:'24091997Mohit@'
              
              }

          });
          var mailOptions={
              from:'mohitpandey126@gmail.com',
              to:req.body.studentemail,
              subject:'REGISTRATION CONFIRMATION',
              text:'Thank you for registering'
          };
          transporter.sendMail(mailOptions,function(error,info){
              if(error){
                  console.log(error);
              }else{
                  console.log('email sent:'+info.response);
                        }              
          });
        
         

    }catch(err){
        res.send("error")
    }
})


router.post("/image",upload.single('file'),async(req,res)=>{
   try{
    res.json({"message":'file upload'});
   }catch(err){
      res.send("error")
   }

})
router.get("/uploadimage",async(req,res)=>{
    try{
    imageData.exec(function(err,data){
        if(err){
            console.log(error);
        }else{
            console.log(data);
            res.json(data)
                  } 
    
    
    })
}catch(err){
    res.send("error")
}
})
    
    





module.exports=router