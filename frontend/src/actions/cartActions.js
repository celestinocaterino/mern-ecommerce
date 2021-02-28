import { ADD_TO_CART, REMOVE_TO_CART } from '../constants/cartCostants';
import axios from 'axios';
import config from './../config';

export const addToCart=(id,quantity)=>async (dispatch,getState)=>{
    const {data} =await axios.get(`${config.API_URL}/api/products/${id}`);
    dispatch({
        type:ADD_TO_CART,
        payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity
        }
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
};

export const removeToCart=(id)=>(dispatch, getState)=>{
    dispatch({
        type: REMOVE_TO_CART,
        payload: id
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

};