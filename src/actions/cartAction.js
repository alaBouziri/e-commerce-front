import axios from 'axios';
import {CART_ADD_ITEM} from '../constants/cardConstants';

export const addToCart = (productId , qty) => async (dispatch , getState) => {
    try {

        const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const {id, title, price , description , category , image} = data
        dispatch({type : CART_ADD_ITEM , payload : {product : id, title, price , description , category , image,qty} })
        localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        
    }
}

