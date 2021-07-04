import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';

const Navbar = () => {
    return (
        <AppBar color="primary">
            <Toolbar>
                <Link to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" >
                        Co-Win
                    </Typography>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
                    <Button style={{ textDecoration: 'none', color: 'inherit' }}>Home</Button>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button style={{ textDecoration: 'none', color: 'inherit' }}>About us</Button>
                </Link>
                <Button color="inherit">Contact us</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
