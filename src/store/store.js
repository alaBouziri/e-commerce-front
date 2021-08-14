import {createStore , combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer } from '../reducer/productReducers';
import { productDetailsReducer } from '../reducer/productDetailsReducers';
import {cartReducer} from '../reducer/cartReducers';
import thunk from 'redux-thunk';


const cartItems = localStorage.getItem('cartItems') || []  ;
const initialState={cart : { cartItems }};

const reducer = combineReducers ({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer , initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;