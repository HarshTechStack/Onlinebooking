import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css'; // Import the CSS module

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" className={styles.title}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.textField}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.textField}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                className={styles.textField}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </motion.div>
    </Container>
  );
};

export default ContactUs;
