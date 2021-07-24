import React, { useEffect  } from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product.jsx'
import useStyles from './productsStyle';
import { useDispatch, useSelector } from 'react-redux';
import {listProducts} from '../../actions/productActions'



const Products = () => {
    //const [products,setProducts]= useState([]);

    // useSelector  instead of useState !  
    const productList = useSelector(state => state.productList);
    const {products,loading , error} = productList;

    // define dispatch
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(listProducts());
    }, [])

    const classes = useStyles();
    return (
        loading ? ( <div>loading ...</div> ) :
        error ? ( <div>{error}</div> ) :  (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        </main>
        )
    )
}
export default Products;