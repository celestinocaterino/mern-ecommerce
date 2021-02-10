import mongoose from 'mongoose'

const connectDb=async () =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    }catch(error){
        console.error('Connection error '+ error)
        process.exit(1)
    }
}
export default connectDb