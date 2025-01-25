import React from 'react';
import Navbar from '../NavBarPage/Navbar.jsx';
import Footer from '../FooterPage/Footer.jsx';
import Announcement from '../AnnouncementPage/Announcement.jsx';
function MainAnnouncement() {
  return (
    <div className="MainAnnouncement">
      <>
      <Navbar />
      <Announcement />
      <Footer />
      </>
       
    </div>
  );
}

export default MainAnnouncement