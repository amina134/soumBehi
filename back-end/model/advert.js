const mongoose=require('mongoose')

const advertSchema =mongoose.Schema({
    title:String,
    type:String,
    price:Number,
    description:String,
    city:String,
    delegation:String,
    category:String,
    imageAdvert:[
        {path:String}
    ]
});
module.exports=mongoose.model('advertSchema',advertSchema)