import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS module for Navbar

const Navbar = () => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Container>
        <Toolbar>
          <Link to="/" className={styles.titleLink}>
            <Typography variant="h6" className={styles.title}>
            WELCOME TO BookSphere

            </Typography>
          </Link>
          <div className={styles.navLinks}>
            <Link to="/login" className={styles.navLink}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/register" className={styles.navLink}>
              <Button color="inherit">Register</Button>
            </Link>
            <Link to="/profile" className={styles.navLink}>
              <Button color="inherit">Profile</Button>
            </Link>
            <Link to="/contact-us" className={styles.navLink}>
              <Button color="inherit">Contact Us</Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
