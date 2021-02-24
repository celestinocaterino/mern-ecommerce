import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import generateToken from './../utils/generateToken.js';

export const authUser= asyncHandler(async (req,res)=>{

    const {email,password} =req.body;
    const user=await User.findOne({email});
    if( user && (await user.matchPassword(password)) ){
        res.json({...user._doc, token:generateToken(user._id)})
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }

});
