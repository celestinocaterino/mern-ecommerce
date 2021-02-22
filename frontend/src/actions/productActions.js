import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from './../constants/productListConstants';
import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from './../constants/productDetailConstants';
import axios from 'axios';
import config from './../config';

export const productList= () => async (dispatch) => {
    try{
        dispatch({
            type: PRODUCT_LIST_REQUEST
        });

        const {data} =await axios.get(`${config.API_URL}/api/products`);

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    }catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
        });
    }
}

export const productDetail= (productId) => async (dispatch) => {
    try{
        dispatch({
            type: PRODUCT_DETAIL_REQUEST
        });

        const {data} =await axios.get(`${config.API_URL}/api/products/${productId}`);

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        });

    }catch(error){
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.message
        });
    }
}