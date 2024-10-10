const express=require("express")
const app=express()
const ConnectDb=require("./config/connectDb")
const advert = require("./model/advert")
require("dotenv").config()

const port=process.env.port
const advertRoute=require('./routes/advertRoutes')
ConnectDb()



app.use('/advert',advertRoute)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})