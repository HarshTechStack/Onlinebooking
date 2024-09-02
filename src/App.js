// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recharge from './components/Recharge';
import FlightBooking from './components/FlightBooking';
import ElectricityBill from './components/ElectricityBill';
import TrainBooking from './components/TrainBooking';
import MovieTickets from './components/MovieTickets';
import MovieBooking from './components/MovieBooking';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/electricity-bill" element={<ElectricityBill />} />
        <Route path="/train-booking" element={<TrainBooking />} />
        <Route path="/movie-tickets" element={<MovieTickets />} />
        <Route path="/book-movie/:movieId" element={<MovieBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
