import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './MovieTickets.css';

// Full list of popular Indian movies with correct image path for Jawan
const movies = [
  // Bollywood
  { id: '1', title: 'Jawan', image: './images/shah-rukh-khan--jawan--srk-films-295651-16x9.avif' },
  { id: '2', title: 'Pathaan', image: '/images/Pathaan-poster.jpg' },
  { id: '3', title: 'Gadar 2', image: '/images/Gadar2-poster.jpg' },
  { id: '4', title: 'Rocky Aur Rani Ki Prem Kahani', image: '/images/RockyAurRani-poster.jpg' },
  { id: '5', title: 'Darlings', image: '/images/Darlings-poster.jpg' },

  // Tollywood
  { id: '6', title: 'RRR', image: '/images/RRR-poster.jpg' },
  { id: '7', title: 'Pushpa: The Rise', image: '/images/Pushpa-poster.jpg' },
  { id: '8', title: 'Sarkaru Vaari Paata', image: '/images/SarkaruVaariPaata-poster.jpg' },
  { id: '9', title: 'Kalki', image: '/images/Kalki-poster.jpg' },
  { id: '10', title: 'Adipurush', image: '/images/Adipurush-poster.jpg' },

  // Kollywood
  { id: '11', title: 'Ponniyin Selvan: Part 1', image: '/images/PonniyinSelvan-poster.jpg' },
  { id: '12', title: 'Jailer', image: '/images/Jailer-poster.jpg' },
  { id: '13', title: 'Leo', image: '/images/Leo-poster.jpg' },
  { id: '14', title: 'Thunivu', image: '/images/Thunivu-poster.jpg' },
  { id: '15', title: 'Vikram', image: '/images/Vikram-poster.jpg' },

  // Mollywood
  { id: '16', title: 'Jaya Jaya Jaya Jaya Hey', image: '/images/JayaJayaJayaJayaHey-poster.jpg' },
  { id: '17', title: '2023', image: '/images/2023-poster.jpg' },
  { id: '18', title: 'Madura Raja', image: '/images/MaduraRaja-poster.jpg' },
  { id: '19', title: 'Malik', image: '/images/Malik-poster.jpg' },
  { id: '20', title: 'Aaraattu', image: '/images/Aaraattu-poster.jpg' },
];

const MovieTickets = () => {
  return (
    <Container className="container">
      <Typography className="title" variant="h4" gutterBottom>
        Movie Tickets Page
      </Typography>
      <div className="grid-container">
        {movies.map((movie) => (
          <Card className="card" key={movie.id}>
            <CardMedia
              className="card-media"
              component="img"
              image={movie.image}
              alt={movie.title}
            />
            <CardContent className="card-content">
              <Typography className="card-title" variant="h6" gutterBottom>
                {movie.title}
              </Typography>
            </CardContent>
            <CardActions className="card-actions">
              <Button
                component={Link}
                to={`/book-movie/${movie.id}`}
                className="book-button"
                variant="contained"
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MovieTickets;
