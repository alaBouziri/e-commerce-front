import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './CartItemStyles';

const CartItem = () => {
    const classes = useStyles();

    return (
        <Card className="cart-item">
        <CardMedia  alt="imageExample" className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">item name</Typography>
          <Typography variant="h5">total</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" /*onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}*/>-</Button>
            <Typography>Qantity</Typography>
            <Button type="button" size="small" /*onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}*/>+</Button>
          </div>
          <Button variant="contained" type="button" color="secondary" /*onClick={() => handleRemoveFromCart(item.id)}*/>Remove</Button>
        </CardActions>
      </Card>
    )
}

export default CartItem
