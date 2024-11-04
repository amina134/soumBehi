const userSchema=require('../model/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const getAllUsers=async(req,res)=>{
    try {
        const users=await userSchema.find()
        res.status(200).json({msg:'you got all the users'})
    } catch (error) {
        console.log(error)
        res.send("error is showing");
        
    }
}

const addUser=async(req,res)=>{
    try {
        const newUser=new userSchema(req.body)
        console.log("new user ",req.body);
        await newUser.save()
        res.status(200).json({msg:'u added a new user',newUser})

        
    } catch (error) {
        console.error(error)
        res.send("error in adding a new user")
    }
}
const getUserById=async(req,res)=>{
    try {
        const {id}=req.params
        console.log("id",id);
        const user=await userSchema.findById(id)
        res.status(200).json({msg:'you got your user'})
    } catch (error) {
        console.error(error)
    }
}


const updateUser=async(req,res)=>{
    try {
        const {id}=req.params
        console.log("id",id);
        const updatedUser=await userSchema.findByIdAndUpdate(id,{$set:{...req.body}})
  
        res.status(200).json({msg:'user updated',updateUser})
    } catch (error) {
        console.error(error)
    }
}

const deleteUser=async(req,res)=>{
    try {
        const {id}=req.params
        console.log("id",id);
        const deletedUser=await userSchema.findByIdAndDelete(id)
      
        res.status(200).json({msg:'user deleted',deleteUser})
    } catch (error) {
        console.error(error)
    }
}

///////////////////////////////// signIn start/////////////////////////////////////
const signIn=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const found=await userSchema.findOne({email})
        console.log(found);

        if(!found){ return res.json({msg:'Email not found'}) }
        const match=bcrypt.compare(password,found.password)
        if(!match){return res.json({msg:'False password'})}

        const payload={id:found._id};
        const token=jwt.sign(payload,'azerty')
        res.json({msg:'you are welcome SignIn',found,token})
        console.log('logged in to your session successfully',email,password);
        
        
    } catch (error) {
        console.error(error)
    }
}
///////////////////////////////// signIn end/////////////////////////////////////

///////////////////////////////// signUp start/////////////////////////////////////
const signUp=async(req,res)=>{
    try {
        const {firstName,lastName,role,age,phone,email,password}=req.body;
        const found=await userSchema.findOne({email});
        if(found){return res.json({msg:'Already reqistred'})} 
        
        const newUser=await new userSchema(req.body);

        const saltRounds=10;
        const salt=bcrypt.genSaltSync(saltRounds)
        const hash=bcrypt.hashSync(password,salt)
        newUser.password=hash;
        newUser.save();
         res.status(200).json({msg:'Welcome'})
    } catch (error) {
        console.log(error)
    }
}


///////////////////////////////// signUp end/////////////////////////////////////


module.exports={getAllUsers,addUser,getUserById,updateUser,deleteUser,signIn,signUp}