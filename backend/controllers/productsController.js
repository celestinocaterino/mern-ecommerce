import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';

export const getProducts= asyncHandler(async (req,res)=>{
    const products=await Product.find({});
    
    res.json(products);
});

export const getProduct= asyncHandler(async (req,res)=>{
    
    const product=await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error('product not found');
    }
    res.json(product);
});