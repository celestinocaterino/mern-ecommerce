import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import generateToken from './../utils/generateToken.js';

export const userAuth= asyncHandler(async (req,res)=>{

    const {email,password} =req.body;
    const user=await User.findOne({email});

    if( user && (await user.matchPassword(password)) ){
        res.json({
            isAdmin:user.isAdmin,
            name: user.name,
            email: user.email, 
            name: user.name,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password!')
    }

});

export const getuserProfile= asyncHandler(async (req,res)=>{

    const user= await User.findById(req.user._id);

    if(user){
        res.json({
            name: user.name,
            email: user.email,
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password!')
    }

});

export const userRegister= asyncHandler(async (req,res)=>{

    const {name, email,password} =req.body;
    const userExists=await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error('User alredy exists!')

    }
    
    const user= await User.create({
        name,
        email,
        password
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            token:generateToken(user._id)

        })
    }
    else{
        res.status(404);
        throw new Error('Error during register process')
    }

});

