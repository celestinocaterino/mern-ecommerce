import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';


const reducer=combineReducers({
    productList: productReducer,
    productDetailReducer: productDetailReducer,
    cartReducer:cartReducer
});

const initialState={};
const middlewares=[thunk];
const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;