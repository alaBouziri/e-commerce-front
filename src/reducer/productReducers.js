import { PRODDUCT_LIST_SECCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUSEET } from "../constants/productConstants";

const productListReducer = (state = {products :[]},action) => {

switch (action.type) {
    case PRODUCT_LIST_REQUSEET:
        return {loading : true};
    case PRODDUCT_LIST_SECCESS:
        return { loading : false, products : action.payload}
    case PRODUCT_LIST_FAIL:
        return {loading : false, error : action.payload}   

    default:
       return state
}
}

export {productListReducer};