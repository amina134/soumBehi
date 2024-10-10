const mongoose=require("mongoose")
const ConnectDb=async()=>{
    try {
        mongoose.connect(process.env.uri)
        console.log("connecting to database")
    } catch (error) {
        console.error(error)
    }
}
module.exports=ConnectDb