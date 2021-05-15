import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import {  Typography } from '@material-ui/core';
import useStyles from './ProductDetailsStyle' 
import { useParams } from "react-router-dom";


const ProductDetaills = () => {
    const [productDetail,setProductDetail] = useState();
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
           <Typography variant="h1" gutterBottom>
               HELLO FROM PRODUCT DETAIL
          </Typography>
        </div>
    )
}

export default ProductDetaills
