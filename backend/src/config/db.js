const mongoose=require("mongoose")
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/paypal",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e)
})