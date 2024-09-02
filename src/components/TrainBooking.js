import React, { useState } from 'react';
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import styles from './TrainBooking.module.css'; // Import the CSS module

const states = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'bangalore', label: 'Bangalore' },
  // Add more states as needed
];

const days = [
  { value: 1, label: '1 Day' },
  { value: 3, label: '3 Days' },
  { value: 7, label: '7 Days' },
  { value: 14, label: '14 Days' },
  // Add more options as needed
];

const TrainBooking = () => {
  const [fromState, setFromState] = useState('');
  const [toState, setToState] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [daysAdvance, setDaysAdvance] = useState(1);
  const [offer, setOffer] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic
    alert(`Booking Details: 
      From: ${fromState}
      To: ${toState}
      Date: ${date}
      Passengers: ${passengers}
      Advance Booking: ${daysAdvance} days
      Offer: ${offer}`);
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom className={styles.heading}>
        Train Booking
      </Typography>
      
      <Card className={styles.card}>
        <CardMedia>
          <TrainIcon className={styles.icon} />
        </CardMedia>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>From State</InputLabel>
                <Select
                  value={fromState}
                  onChange={(e) => setFromState(e.target.value)}
                  label="From State"
                >
                  {states.map((state) => (
                    <MenuItem key={state.value} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>To State</InputLabel>
                <Select
                  value={toState}
                  onChange={(e) => setToState(e.target.value)}
                  label="To State"
                >
                  {states.map((state) => (
                    <MenuItem key={state.value} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Travel Date"
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Number of Passengers</InputLabel>
                <Select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  label="Number of Passengers"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Advance Booking</InputLabel>
                <Select
                  value={daysAdvance}
                  onChange={(e) => setDaysAdvance(e.target.value)}
                  label="Advance Booking"
                >
                  {days.map((day) => (
                    <MenuItem key={day.value} value={day.value}>
                      {day.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Special Offers"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit} className={styles.button}>
                Book Train
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      <Typography variant="h5" gutterBottom marginTop={4}>
        Upcoming Trains
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={styles.trainCard}>
            <CardMedia className={styles.trainIcon}>
              <TrainIcon />
            </CardMedia>
            <CardContent>
              <Typography variant="h6">Train 1</Typography>
              <Typography>Departure: Date & Time</Typography>
              <Typography>Arrival: Date & Time</Typography>
              <Typography>From: State A</Typography>
              <Typography>To: State B</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Book Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Add more train cards as needed */}
      </Grid>
    </Container>
  );
};

export default TrainBooking;
