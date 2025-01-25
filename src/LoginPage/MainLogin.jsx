// src/LoginPage.jsx
import React from 'react';
import Navbar from '../NavBarPage/Navbar.jsx';
import Footer from '../FooterPage/Footer.jsx';
import Login from '../LoginPage/Login.jsx';
function MainLogin() {
  return (
    <div className="MainLogin">
      <>
      <Navbar />
      <Login />
      <Footer />
      </>
       
    </div>
  );
}

export default MainLogin;
