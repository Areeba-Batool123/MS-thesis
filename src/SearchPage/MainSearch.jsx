import React from 'react';
import Navbar from '../NavBarPage/Navbar.jsx';
import Footer from '../FooterPage/Footer.jsx';
import Search from '../SearchPage/Search.jsx';
function MainSearch() {
  return (
    <div className="MainSearch">
      <>
      <Navbar />
      <Search />
      <Footer />
      </>
       
    </div>
  );
}

export default MainSearch