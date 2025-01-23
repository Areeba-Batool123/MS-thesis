// src/App.jsx
import React from 'react';
import Navbar from './HomePage/Navbar.jsx';
import Herosection from './HomePage/Herosection.jsx';
import Bodyb from './HomePage/Bodyb.jsx';
import Features from './HomePage/Features.jsx';
import Footer from './HomePage/Footer.jsx';
import Login from './LoginPage/Login.jsx';
import Registration from './RegistrationPage/Registration.jsx';
import About from './AboutUsPage/About.jsx';
import Announcement  from './AnnouncementPage/Announcement.jsx';
import Search  from './SearchPage/Search.jsx';
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Herosection />
      <Bodyb />
      <Features />
      <Footer />
      <Login />
      <Registration />
      <About />
      <Announcement /> */}
      {/* <Check /> */}
     
      <Search />
    </div>
  );
}

export default App;
