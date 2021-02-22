import { ADD_TO_CART, REMOVE_TO_CART } from '../constants/cartCostants';

export const cartReducer= (state={items:[]}, action)=>{
    switch(action.type){
        case ADD_TO_CART: 
            return state;
        case REMOVE_TO_CART:
            return state;
        default:
            return state;
    }

};