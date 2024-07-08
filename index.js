const express = require("express")
var responseTime = require('response-time')
const morgan=require('morgan')
const app=express()

//router middleware 
const loggin=(req,res,next)=>{
    console.log(`Request Method:${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Time: ${new Date()}`);
    next()
}

app.use(responseTime())
app.use(morgan('dev'))
app.use(loggin)

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"get the api"
    })
})

app.listen(2020,()=>
console.log(`server 2020 is connected`))