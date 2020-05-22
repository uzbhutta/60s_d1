import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={styles.container}>
        <AppBar className={styles.appbar}>
            <Toolbar className={styles.toolbar}>
                <Typography variant="h5">
                60 Seconds
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;
