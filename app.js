const express=require("express")
const mongoose=require("mongoose")
const url="mongodb://localhost/quizdb"
const app=express()
var cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200'
}));

const option={
  useNewUrlParser:true,

  
 useCreateIndex:true, 
  useUnifiedTopology:true
  
}
mongoose.connect(url,option)
const con=mongoose.connection
con.on("open",function(){
    console.log("connected")
})

app.use(express.json())
app.use(express.static('quiz'));
const registerRouter=require("./routes/register")
app.use('/register',registerRouter)

const adminRouter=require("./routes/admin")
app.use('/admin',adminRouter)
app.listen(9000,function(){
    console.log("server started")

})

