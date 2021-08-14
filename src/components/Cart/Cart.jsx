import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.css";

import { addToCart, removeFromCart } from "../../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ location: { search }, match, history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  // Take added product id from url
  const productId = match.params.id;
  const qty = search ? Number(search.split("=")[1]) : 1;

  //const [order , setOrder] = useState({});
  //const classes = useStyles();

  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <>
 
        <h1>Shoping cart</h1>
        {cartItems.length !== 0 ? (
          <div className={styles.cart}>
          <div className={styles.cart__items}>
            {cartItems.map(({  product,title, name, image, price }) => (
                <div className={styles.cartItem}>
                <img
                  className={styles.cartItem__image}
                  src={image}
                  alt={title}
                />
                <div className={styles.cartItem__details}>
                  <p className={styles.details__title}>{title}</p>
                 
                  <p className={styles.details__price}>$ {price}</p>
                </div>
                <div className={styles.cartItem__actions}>
                  <div className={styles.cartItem__qty}>
                    <label htmlFor="qty">Qty</label>
                    <input
                      min="1"
                      type="number"
                      id="qty"
                      name="qty"
                      defaultValue="1"
                    />
                  </div>
                  <button
                    className={styles.actions__deleteItemBtn}
                    onClick = {()=>removeFromCartHandler(product)}
                  >
                    <img
                      src="https://image.flaticon.com/icons/svg/709/709519.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            ))}
         </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ( items)</span>
          <span>$ </span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
        ) : (
          <h1>Your cart is empty</h1>
        )}
     
      {/* card subtotal section*/}
      
    </>
  );
};

export default Cart;
