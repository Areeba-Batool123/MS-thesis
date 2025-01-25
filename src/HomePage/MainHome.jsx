// src/MainHome.jsx
import React from 'react';
import Navbar from '../NavBarPage/Navbar.jsx';
import Herosection from './Herosection.jsx';
import Bodyb from './Bodyb.jsx';
import Features from './Features.jsx';
import Footer from '../FooterPage/Footer.jsx';
function MainHome() {
  return (
    <div className="MainHome">
       <Navbar />
      <Herosection />
      <Bodyb />
      <Features />
      <Footer />
    </div>
  );
}

export default MainHome;
