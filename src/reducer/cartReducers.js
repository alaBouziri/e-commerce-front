import { CART_ADD_ITEM } from "../constants/cardConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;
  const { cartItems } = state;
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = cartItems.find((x) => x.product === item.product);
      if (existItem)
        return {
          ...state,
          // Map through current cart items
          // If current item id is equal to exist item id, then return item
          cartItems: cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        };
      //If doesn't exist we will push it to array
      // Set to an array of current items and add new item
      return { ...state, cartItems: [...cartItems, item] };
    default:
      return state;
  }
};