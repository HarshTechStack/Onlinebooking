import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

// Sample data for cinema halls
const cinemaHalls = [
  { id: '1', name: 'Cinema Hall 1' },
  { id: '2', name: 'Cinema Hall 2' },
  { id: '3', name: 'Cinema Hall 3' },
  // Add more cinema halls as needed
];

const MovieBooking = () => {
  const { movieId } = useParams(); // Get the movie ID from URL
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHall, setSelectedHall] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    alert(`Booking Details: 
      Movie ID: ${movieId}
      Date: ${selectedDate}
      Cinema Hall: ${selectedHall}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Movie
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Select Date"
            type="date"
            variant="outlined"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Cinema Hall</InputLabel>
            <Select
              value={selectedHall}
              onChange={(e) => setSelectedHall(e.target.value)}
              label="Cinema Hall"
            >
              {cinemaHalls.map((hall) => (
                <MenuItem key={hall.id} value={hall.id}>
                  {hall.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Confirm Booking
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieBooking;
