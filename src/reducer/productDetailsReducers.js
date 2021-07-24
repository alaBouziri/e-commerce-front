import {
  PRODUCT_DETAILS_SECCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
} from "../constants/productDetailsConstants";

const productDetailsReducer = (state = { product : [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {loading : true};
    case PRODUCT_DETAILS_SECCESS:
      return {loading : false , product : action.payload};
    case PRODUCT_DETAILS_FAIL:
        return {loading : false , error : action.payload};
    default:
      return state;
  }
};

export {productDetailsReducer};
