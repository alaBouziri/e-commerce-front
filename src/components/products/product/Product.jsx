import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart, Height } from '@material-ui/icons'
import useStyles from './ProductStyle'
import { Link } from "react-router-dom";
//import ProductDetails from "../productDetails/ProductDetails"

const Product = ({ product }) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}  $
                    </Typography>
                    <Typography variant="h2" color="textSecondary" >{product.desciption}</Typography>
                </div>

            </CardContent >
            <CardActions disableSpacing className={classes.cartActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>

                <Link  to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="primary" >
                        View details
                </Button>
                </Link>
            </CardActions>
        </Card >
    )
}

export default Product
