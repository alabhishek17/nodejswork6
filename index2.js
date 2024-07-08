const express = require("express")
var responseTime = require('response-time')
var morgan =require("morgan")
const app=express()

const logger=(req,res,next)=>{
console.log(`request Method:${req.methd}`);
console.log(`getting URL:${req.url}`);
console.log(`date:${new Date()}`);
console.log(`Request IP: ${req.ip}`);
next()
}
app.use(responseTime())
app.use(morgan("dev"))
app.use(logger)

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"get api succesfuly"
    })
})

app.listen(2000,()=> console.log(`server connected port2000`))