import dotenv from 'dotenv';
import products from './data/products.js';
import users from './data/users.js';
import Product from './models/Product.js';
import User from './models/User.js';
import Order from './models/Order.js';
import connectDb from './db.js';

dotenv.config();
connectDb();

const destroyData= async()=>{
    try{
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        
        
        process.exit()
    }catch(error){

    }
};

const importData=async ()=>{
    const createdUsers=await User.insertMany(users);
    const adminUser=createdUsers[0]._id;
    const addProducts= products.map((product)=>{
        return {
            ...product,
            user: adminUser
        };
    })
    await Product.insertMany(addProducts);
};
destroyData();
if(process.argv[2] == '-d'){
    destroyData();
}else{
    importData();
}

