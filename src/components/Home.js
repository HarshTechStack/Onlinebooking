import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import RechargeIcon from '@mui/icons-material/AccountBalanceWallet';
import FlightIcon from '@mui/icons-material/Flight';
import ElectricityIcon from '@mui/icons-material/Lightbulb';
import TrainIcon from '@mui/icons-material/Train';
import MovieIcon from '@mui/icons-material/Movie';
import { motion } from 'framer-motion';

const iconStyle = {
  fontSize: 60,
  margin: '20px auto',
};

const rotateAnimation = {
  hidden: { rotate: 100 },
  visible: { rotate: 360 },
};

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionColor = {
  offers: '#ff9800',
  privacy: '#4caf50',
  experience: '#2196f3',
  contact: '#e91e63',
};

const sectionStyle = (color) => ({
  margin: '40px 0',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: color,
  color: '#fff',
});

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        WELCOME TO ONLINE BOOKING
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={rotateAnimation}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              >
                <RechargeIcon style={{ ...iconStyle, color: '#1976d2' }} />
              </motion.div>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Recharge
              </Typography>
              <Button component={Link} to="/recharge" variant="contained" color="primary" fullWidth>
                Go to Recharge
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={rotateAnimation}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              >
                <FlightIcon style={{ ...iconStyle, color: '#ff5722' }} />
              </motion.div>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Flight Booking
              </Typography>
              <Button component={Link} to="/flight-booking" variant="contained" color="secondary" fullWidth>
                Book Flights
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={rotateAnimation}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              >
                <ElectricityIcon style={{ ...iconStyle, color: '#4caf50' }} />
              </motion.div>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Electricity Bill
              </Typography>
              <Button component={Link} to="/electricity-bill" variant="contained" color="success" fullWidth>
                Pay Bill
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={rotateAnimation}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              >
                <TrainIcon style={{ ...iconStyle, color: '#2196f3' }} />
              </motion.div>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Train Booking
              </Typography>
              <Button component={Link} to="/train-booking" variant="contained" color="info" fullWidth>
                Book Train
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={rotateAnimation}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              >
                <MovieIcon style={{ ...iconStyle, color: '#e91e63' }} />
              </motion.div>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Movie Tickets
              </Typography>
              <Button component={Link} to="/movie-tickets" variant="contained" color="warning" fullWidth>
                Book Movies
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* New Sections */}
      <section style={sectionStyle(sectionColor.offers)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Special Offers
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Check out our latest offers and discounts across all services!
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section style={sectionStyle(sectionColor.privacy)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Privacy Policy
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h6">
                We value your privacy and ensure that your data is secure. Read our privacy policy to learn more about how we handle your information.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section style={sectionStyle(sectionColor.experience)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Customer Experience
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h6">
                We strive to provide the best experience to our customers. Share your feedback or read about others' experiences with our services.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section style={sectionStyle(sectionColor.contact)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Have any questions or need support? Get in touch with us through our contact form or directly via email or phone.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Container>
  );
};

export default Home;
