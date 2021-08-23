import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="default" position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography> Covid-19 </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
