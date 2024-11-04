const express=require("express")
const app=express()
const cors =require('cors')
const ConnectDb=require("./config/connectDb")
const path=require('path')

const userRoute=require('./routes/UserRoutes')
app.use('/images',express.static(path.join(__dirname, 'public/products-images')))
app.use(cors({
    origin: 'http://localhost:3000'
  }));
const advert = require("./model/advert")
require("dotenv").config()



app.use(express.json());

const port=process.env.port
const advertRoute=require('./routes/advertRoutes')
ConnectDb()
//route Principale pour les utilisateurs
  app.use('/user',userRoute)

//  Route Principale pour les annonces
 app.use('/advert',advertRoute)


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})