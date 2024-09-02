import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Button, Grid, FormControl, InputLabel, Select, FormHelperText, Radio, RadioGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import styles from './FlightBooking.module.css'; // Import the CSS module

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const FlightBooking = () => {
  const [tripType, setTripType] = useState('one-way');
  const [fromState, setFromState] = useState('');
  const [toState, setToState] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [classType, setClassType] = useState('economy');
  const [offers, setOffers] = useState({
    student: false,
    seniorCitizen: false
  });

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
    if (event.target.value === 'one-way') {
      setReturnDate('');
    }
  };

  const handleFromStateChange = (event) => {
    setFromState(event.target.value);
  };

  const handleToStateChange = (event) => {
    setToState(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleTravelersChange = (event) => {
    setTravelers(event.target.value);
  };

  const handleClassTypeChange = (event) => {
    setClassType(event.target.value);
  };

  const handleOffersChange = (event) => {
    setOffers({
      ...offers,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Trip Type:', tripType);
    console.log('From State:', fromState);
    console.log('To State:', toState);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    console.log('Travelers:', travelers);
    console.log('Class Type:', classType);
    console.log('Offers:', offers);
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Flight Booking
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={styles.formControl}>
            <FormLabel>Trip Type</FormLabel>
            <RadioGroup value={tripType} onChange={handleTripTypeChange}>
              <FormControlLabel value="one-way" control={<Radio />} label="One Way" />
              <FormControlLabel value="round-trip" control={<Radio />} label="Round Trip" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={styles.formControl}>
            <InputLabel>From</InputLabel>
            <Select
              value={fromState}
              onChange={handleFromStateChange}
              label="From"
              className={styles.select}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Select your departure state</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={styles.formControl}>
            <InputLabel>To</InputLabel>
            <Select
              value={toState}
              onChange={handleToStateChange}
              label="To"
              className={styles.select}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Select your destination state</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Departure Date"
            type="date"
            variant="outlined"
            value={departureDate}
            onChange={handleDepartureDateChange}
            className={styles.textField}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {tripType === 'round-trip' && (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Return Date"
              type="date"
              variant="outlined"
              value={returnDate}
              onChange={handleReturnDateChange}
              className={styles.textField}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Number of Travelers"
            type="number"
            variant="outlined"
            value={travelers}
            onChange={handleTravelersChange}
            className={styles.textField}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={styles.formControl}>
            <InputLabel>Class</InputLabel>
            <Select
              value={classType}
              onChange={handleClassTypeChange}
              label="Class"
              className={styles.select}
            >
              <MenuItem value="economy">Economy</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="first">First Class</MenuItem>
            </Select>
            <FormHelperText>Select class type</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset" className={styles.formControl}>
            <FormLabel component="legend">Offers</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={offers.student} onChange={handleOffersChange} name="student" />}
              label="Student"
            />
            <FormControlLabel
              control={<Checkbox checked={offers.seniorCitizen} onChange={handleOffersChange} name="seniorCitizen" />}
              label="Senior Citizen"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit} className={styles.button}>
            Search Flights
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FlightBooking;
