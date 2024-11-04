const mongoose=require("mongoose")
const ConnectDb=async()=>{
    try {
        await  mongoose.connect(process.env.uri)
        console.log("connecting to database")
    } catch (error) {
        console.error(error)
    }
}
module.exports=ConnectDb