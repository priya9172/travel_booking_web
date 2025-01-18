import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login/Login.jsx';
import Booking from './component/Booking/Booking.jsx';
import Destination from './component/Destination';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
