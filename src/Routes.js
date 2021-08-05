import { Products, ProductDetails, Cart } from "./components";
import React from "react";
import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Products} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/cart/:id?" component={Cart} />
    </>
  );
};

export default Routes;
