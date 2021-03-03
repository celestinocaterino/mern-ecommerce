import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import { userReducer } from './reducers/userReducer';

const cartItemFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userFromStorage=localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const reducer=combineReducers({
    productList: productReducer,
    productDetailReducer: productDetailReducer,
    cart: cartReducer,
    userInfo: userReducer
});

const initialState={
    cart: {cartItems:cartItemFromStorage},
    userInfo: {user: userFromStorage}
};
const middlewares=[thunk];
const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;