import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./cartStyles";
import CartItem from './cartItem/CartItem'

const Cart = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
    //const [order , setOrder] = useState({});
    const classes = useStyles();

    /*
    useEffect(() => {
        if (productId)
            dispatch (addToCart(productId,qty))
        
    }, [])
*/

  const renderEmptyCart = () => (
    <Typography>
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <CartItem />
        </Grid>
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {renderCart()}
      
    </Container>
  );
};

export default Cart;
