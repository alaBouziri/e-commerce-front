import axios from "axios";
import { PRODDUCT_LIST_SECCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUSEET } from "../constants/productConstants"

const listProducts = () => async(dispatch) => {
    try {
        
        dispatch({type : PRODUCT_LIST_REQUSEET});
        const {data} = await axios.get('https://fakestoreapi.com/products');
        dispatch({type: PRODDUCT_LIST_SECCESS,payload : data});
    } catch (error) {
        console.log(error)     
        dispatch({type : PRODUCT_LIST_FAIL,payload:error.message})
    }
}

export {listProducts}