import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const cartItemFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const reducer=combineReducers({
    productList: productReducer,
    productDetailReducer: productDetailReducer,
    cart: cartReducer
});

const initialState={
    cart: {cartItems:cartItemFromStorage}
};
const middlewares=[thunk];
const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;