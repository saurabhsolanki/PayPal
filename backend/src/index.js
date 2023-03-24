const express = require('express')
const app= express()
require("./config/db")
const cors =require("cors")
const tasks=require('./Routes/task.route')
const sprint=require('./Routes/week.route')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get('/', (req,res)=> res.send('hello'))
app.use("/task",tasks)
app.use("/sprint",sprint)

app.listen(8080,()=> {console.log('server started at port 8080')})