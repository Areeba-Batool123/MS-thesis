// src/App.jsx
import React from 'react';
import MainLogin from './LoginPage/MainLogin.jsx';
import MainHome from './HomePage/MainHome.jsx';
import MainSearch from './SearchPage/MainSearch.jsx';
import MainRegistration from './RegistrationPage/MainRegistration.jsx';
import MainAnnouncement from './AnnouncementPage/MainAnnouncement.jsx';
import MainAbout from './AboutUsPage/MainAbout.jsx';
function App() {
  return (
    <div className="App">
      
      {/* 
       <Home />
       <MainLogin />
       <MainSearch />
       <MainRegistration  />
       <MainAnnouncement />
       */}
       <MainAbout />
        
      
    </div>
  );
}

export default App;
