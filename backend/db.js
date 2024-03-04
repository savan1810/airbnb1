const mongoose=require('mongoose');
const mongoURI=process.env.MONGODB_URL;

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected")
    }).catch((e)=>{
        console.log(e)
    });
}

module.exports=connectToMongo;