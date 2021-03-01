import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
const auth=asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const decoded= jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.userId).select('-password');
            next()

        }catch(err){
            console.error(err);
            res.status(401);
            throw new Error('Not authorized!');

        }
    }

    if(!token){
        res.status(401);
        throw new Error('Token not found!');
    }
})

export {auth}