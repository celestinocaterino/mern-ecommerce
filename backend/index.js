import express from 'express';
import products from './data/products.js';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db.js';

dotenv.config();
connectDb();

const PORT=process.env.PORT || 500;
const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.json('Api running');
});
app.get('/api/products',(req,res)=>{
    res.json(products);
});
app.get('/api/products/:id',(req,res)=>{
    const product=products.find(p=> p._id === req.params.id);
    res.json(product);
});



app.listen(PORT, console.log('Server running...'));