import React, { useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import useStyles from "./ProductDetailsStyle";
import { useParams } from "react-router-dom";
import { productDetailsAction } from "../../../actions/productDetailsAction";
import { useSelector, useDispatch } from "react-redux";
//import Product from '../product/Product';

const ProductDetails = () => {
  //  const [productDetail, setProductDetail] = useState();
  const classes = useStyles();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const { id } = useParams();
  //define dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productDetailsAction({ id }));
  }, []);

  /*
useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProductDetail(data.data);
        console.log(id)
        console.log(data.data)
    }
    
    getData();
}, [])
*/
  console.log(loading);
  return (
   loading ? (
    <Typography variant="h4" gutterBottom>
      Loading product ...
    </Typography>
  ) : error ? (
    <Typography variant="h4" gutterBottom>
      {error}
    </Typography>
  ) : (
    <main>
      <div className={classes.root}>
        <div className={classes.details}>
          <div className={classes.detailsImage}>
            <img className={classes.img} src={product.image} alt="PRODUCT IMAGE" />
          </div>

          <div className={classes.detailsInfo}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Typography variant="h4" gutterBottom>
                   {product.title}
                </Typography>
              </li>
              <li>
                <Typography variant="h5" gutterBottom>
                    {product.category}
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom>
                    {product.description}
                </Typography>
              </li>
            </ul>

            <Card>
              <CardContent>
                <div className={classes.cardContent}>
                  <Typography variant="h6" gutterBottom>
                    {product.price}
                  </Typography>
                  <Typography variant="h6">available</Typography>
                  <Typography variant="h6">qty :</Typography>
                </div>
              </CardContent>
              <CardActions disableSpacing className={classes.cartActions}>
                <Button variant="outlined" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
  )
};

export default ProductDetails;
