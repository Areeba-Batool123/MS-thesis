import React from 'react';
import Navbar from '../NavBarPage/Navbar.jsx';
import Footer from '../FooterPage/Footer.jsx';
import Registration from '../RegistrationPage/Registration.jsx';
function MainRegistration() {
  return (
    <div className="MainRegistration">
      <>
      <Navbar />
      <Registration />
      <Footer />
      </>
       
    </div>
  );
}

export default MainRegistration