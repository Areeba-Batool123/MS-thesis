// src/App.jsx
import React from 'react';
import Navbar from './Home/Navbar.jsx';
import Herosection from './Home/Herosection.jsx';
import Bodyb from './Home/Bodyb.jsx';
import Features from './Home/Features.jsx';
import Footer from './Home/Footer.jsx';
// import Check from './components/Check.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Bodyb />
      <Features />
      <Footer />
      {/* <Check /> */}
    </div>
  );
}

export default App;
