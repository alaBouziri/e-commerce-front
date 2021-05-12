import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './navBarStyles';
import StoreTwoToneIcon from '@material-ui/icons/StoreTwoTone';

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>

                        <IconButton aria-label="Show cart items" color="inherit">
                            <StoreTwoToneIcon />
                        </IconButton>
                        mySHOP
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
