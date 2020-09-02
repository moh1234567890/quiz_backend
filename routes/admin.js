const express=require('express')
const router=express.Router()
const Score=require("../models/score")




router.post("/scores",async(req,res)=> {
   
    const score=new Score({
        studentname:req.body.studentname,
        studentclass:req.body.studentclass,
        studentroll:req.body.studentroll,
        finalscore:req.body.finalscore
    })
    try{
          const r1=await score.save()
          console.log(r1)
    }catch(err){
        res.send("error")
    }
})
router.get('/viewScoreStudent',async(req,res)=>{
    try{
        const score=await Score.find()
        res.json(score)
    }catch(err){
        res.send("error"+err)
    }
    
})









module.exports=router