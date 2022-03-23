//1.引入express
const express=require('express')
const {response} = require("express");
//2.创建应用对象
const app=express()
//3.创建路由规则
app.get('/',(request,response)=>{
    response.send('hello')
})
//4.监听端口
app.listen(8080,()=>{
    console.log('Running')
})