import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import useStyles from './ProductDetailsStyle'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetaills = () => {
    const [productDetail, setProductDetail] = useState();
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProductDetail(data);
            console.log(data)
        }

        getData();
    }, [])

    return (
        <div className={classes.root}>
            
            <div className={classes.details}>
                <div className={classes.detailsImage}  >
                    <img className={classes.img} src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt="PRODUCT IMAGE" />
                </div>
                <div className={classes.detailsInfo} >
                    <ul style={{listStyleType : 'none'}}>
                        <li><Typography variant="h4" gutterBottom>
                            product title
                            </Typography>
                        </li>
                        <li><Typography variant="h5" gutterBottom>
                            product catégorie
                            </Typography>
                        </li>
                        <li><Typography variant="h6" gutterBottom>
                            description
                            </Typography>
                        </li>
                        
                    </ul>
                
                    <Card >

                        <CardContent>
                            <div className={classes.cardContent}>
                                <Typography variant="h6" gutterBottom>
                                    price :
                    </Typography>
                                <Typography variant="h6" >
                                    status :
                    </Typography>
                                <Typography variant="h6"  >
                                    qty :
                    </Typography>
                            </div>

                        </CardContent >
                        <CardActions disableSpacing className={classes.cartActions}>
                            <Button variant="outlined" color="primary" >
                                Add to Cart
                            </Button>
                        </CardActions>
                    </Card >
                </div>
            </div>

        </div>
    )
}

export default ProductDetaills
