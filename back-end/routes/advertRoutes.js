const express=require('express')
const advertRoute=express.Router()

const {addAdvert,allAdvert,getAdvertById,updateAdvert,deleteAdvert,patchAdvert}=require('../controllers/advertControllers')
advertRoute.use(express.json());


// http://localhost:2000/advert/addAdvert
advertRoute.post('/addAdvert',addAdvert)

// http://localhost:2000/advert/allAdvert
advertRoute.get('/allAdverts',allAdvert)

// http://localhost:2000/advert/getAdverts/:id
advertRoute.get('/getAdvert/:id',getAdvertById)

// http://localhost:2000/advert/updateAdvert/:id
advertRoute.put('/updateAdvert/:id',updateAdvert)

// http://localhost:2000/advert/patchAdvert/:id
advertRoute.patch('/patchAdvert/:id',patchAdvert)

// http://localhost:2000/advert/deleteAdvert/:id
advertRoute.delete('/deleteAdvert/:id',deleteAdvert)
module.exports=advertRoute

