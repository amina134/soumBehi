const { default: mongoose } = require("mongoose");
const advertSchema=require("../model/advert")


const addAdvert= async(req,res)=>{
    try {
        const newAdvert=new advertSchema(req.body)
        console.log("new advert ",newAdvert)
        await newAdvert.save()
        res.status(200).json({msg:' advert added'})
    } catch (error) {
        console.error(error)
        res.send('u have a problem')
    }
};


const getAdvertById= async(req,res)=>{
    try {
        const {id}=req.params;
        console.log('id',id)
        const advert=await advertSchema.findById(id)
        res.status(200).json({msg:'Advert',advert})
        console.log("new advert ",newAdvert)
    } catch (error) {
        console.error(error)
        res.send('u have a problem')
    }
};
const updateAdvert= async(req,res)=>{
    try {
        const {id}=req.params;
        console.log('id',id)
        const updatedAdvert=await advertSchema.findByIdAndUpdate(id,req.body)
        
        console.log("data updated")
        res.status(200).json({updatedAdvert})
        
    } catch (error) {
        console.error(error)
        res.send('u have a problem')
    }
}
const patchAdvert= async(req,res)=>{
    try {
        const {id}=req.params;
        console.log('id',id)
        const updatedAdvert=await advertSchema.findByIdAndUpdate(id,req.body)
        
        console.log("data updated")
        res.status(200).json({updatedAdvert})
        
    } catch (error) {
        console.error(error)
        res.send('u have a problem')
    }
}
const deleteAdvert= async(req,res)=>{
    try {
        const {id}=req.params;
        console.log('id',id)
        const deletedAdvert=await advertSchema.findByIdAndDelete(id)
        console.log("data updated")
        res.status(200).json({msg:'u deleted an  advert',deletedAdvert})
        
    } catch (error) {
        console.error(error)
        res.send('u have a problem')
    }
}

const allAdvert=async(req,res)=>{
    try {
        const adverts= await advertSchema.find()
        res.status(200).json(adverts)
    } catch (error) {
        console.error(error)
        res.send('u have a problem')
    }
}



module.exports={addAdvert,allAdvert,getAdvertById,updateAdvert,deleteAdvert,patchAdvert}