import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './Recharge.module.css'; // Import the CSS module for Recharge

const serviceProviders = [
  { value: 'jio', label: 'Jio' },
  { value: 'airtel', label: 'Airtel' },
  { value: 'vodafone', label: 'Vodafone Idea' },
  { value: 'bsnl', label: 'BSNL' },
];

const plans = [
  { value: '28d', label: '28 Days' },
  { value: '54d', label: '54 Days' },
  { value: '84d', label: '84 Days' },
];

const planPrices = {
  jio: {
    '28d': 199,
    '54d': 399,
    '84d': 599,
  },
  airtel: {
    '28d': 229,
    '54d': 429,
    '84d': 649,
  },
  vodafone: {
    '28d': 219,
    '54d': 419,
    '84d': 629,
  },
  bsnl: {
    '28d': 165,
    '54d': 325,
    '84d': 485,
  },
};

const animationVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Recharge = () => {
  const [number, setNumber] = useState('');
  const [provider, setProvider] = useState('');
  const [type, setType] = useState('prepaid');
  const [plan, setPlan] = useState('');
  const [price, setPrice] = useState(null);

  const handleSubmit = () => {
    // Handle form submission
    alert(`Recharge Details: 
      Number: ${number}
      Provider: ${provider}
      Type: ${type}
      Plan: ${plan}
      Price: ${price}`);
  };

  const handleProviderChange = (e) => {
    const selectedProvider = e.target.value;
    setProvider(selectedProvider);
    if (plan) {
      setPrice(planPrices[selectedProvider][plan] || 0);
    }
  };

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
    if (provider) {
      setPrice(planPrices[provider][selectedPlan] || 0);
    }
  };

  return (
    <Container className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom className={styles.heading}>
          Recharge Page
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={styles.textField}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FormControl fullWidth variant="outlined" className={styles.formControl}>
              <InputLabel>Service Provider</InputLabel>
              <Select
                value={provider}
                onChange={handleProviderChange}
                label="Service Provider"
              >
                {serviceProviders.map((provider) => (
                  <MenuItem key={provider.value} value={provider.value}>
                    {provider.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FormControl fullWidth variant="outlined" className={styles.formControl}>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Type"
              >
                <MenuItem value="prepaid">Prepaid</MenuItem>
                <MenuItem value="postpaid">Postpaid</MenuItem>
              </Select>
            </FormControl>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FormControl fullWidth variant="outlined" className={styles.formControl}>
              <InputLabel>Plan</InputLabel>
              <Select
                value={plan}
                onChange={handlePlanChange}
                label="Plan"
              >
                {plans.map((plan) => (
                  <MenuItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography variant="h6" gutterBottom className={styles.price}>
              {price !== null ? `Price: ₹${price}` : 'Select a plan to see the price'}
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button variant="contained" color="primary" onClick={handleSubmit} className={styles.button}>
              Recharge
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recharge;
