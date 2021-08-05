import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./cartStyles";
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';

import { addToCart } from "../../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ location: { search }, match, history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  // Take added product id from url
  const productId = match.params.id;
  const qty = search ? Number(search.split("=")[1]) : 1;
  
  //const [order , setOrder] = useState({});
  const classes = useStyles();

  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

 
  return (
    <Row>
      <Col md={8}>
        <h1>Shoping cart</h1>
        {cartItems.length !== 0 ? (
          <ListGroup variant="flush">
          {cartItems.map(({product, title, name, image, price}) => (
            <ListGroup.Item key={product}>
              <Row>
                <Col md={2}>
                  <Image src={image} alt={name} fluid rounded width="250"/>
                </Col>
                <Col md={3}>
                  <Link to={`/product/${product}`}>{title}</Link>
                </Col>
                <Col md={2}>${price}</Col>
                <Col md={2}>
                  
                </Col>
                <Col md={2}>
                  <Button type="button" variant="light" >
                    <i className="fas fa-trash" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (<h1>Your cart is empty</h1>)}
      </Col>
      </Row>
  );
};

export default Cart;
