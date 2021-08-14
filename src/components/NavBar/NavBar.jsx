import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./navBarStyles";
import StoreTwoToneIcon from "@material-ui/icons/StoreTwoTone";
import { Link } from "react-router-dom";

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Link to={`/`} style={{ textDecoration: "none" }}>
                <StoreTwoToneIcon />
              </Link>
            </IconButton>
            mySHOP
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <Link to={`/cart`} style={{ textDecoration: "none" }}>
                  <ShoppingCart />
                </Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
