import axios from 'axios';

const addTocart = (productId , qty) => async (dispatch) => {
    try {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        payload
    } catch (error) {
        
    }
}