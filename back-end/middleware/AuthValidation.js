let jwt =require('jsonwebtoken')
const userSchema=require('../model/user')

exports.AuthValidation=async(req,res)=>{
    try {
        const token=req.header('Authorization')
        let decoded=jwt.verify(token,'azerty')
        if(!decoded){return res.json({errors})}
        const user=await userSchema.findById(decoded.id)
        res.user=user;
        next()
    } catch (error) {
        console.log(error);
        
    }
}

