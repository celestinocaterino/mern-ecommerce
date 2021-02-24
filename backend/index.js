import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db.js';
import productRoutes from './routes/products.js';
import userRoutes from './routes/user.js';

import {notFound, errorhandler} from './middleware/errorHandler.js';

dotenv.config();
connectDb();
const PORT=process.env.PORT || 500;
const app=express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('Api running');
});

app.use('/api/products',productRoutes);
app.use('/api/user',userRoutes);


app.use(notFound);
app.use(errorhandler);
app.listen(PORT, console.log('Server running...'))