import axios from "axios";
import {
  PRODUCT_DETAILS_SECCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
} from "../constants/productDetailsConstants";
//import { useParams } from "react-router-dom";

const productDetailsAction = ({id}) => async(dispatch) => {

  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SECCESS , payload : data});
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL , payload : error.message});
  }
};

export {productDetailsAction}