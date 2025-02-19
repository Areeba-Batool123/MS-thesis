import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you will have the CSS in a separate file.
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const navigate = useNavigate();
  return (
    <footer className="section footer">
      {/* <div className="footer__header">
        <a href="/" className="footer__logo">
        <img src="logo-removebg-preview.png" alt="Description" 
        style={{ width: '20%', height: '20%' }}
        />
        </button>
        <ul className="social">
          <li className="social__item">
            <button target="_blank" className="btn social">
              <span className="icon twitter"></span>
            </button>
          </li>
          <li className="social__item">
            <button target="_blank" className="btn social">
              <span className="icon youtube"></span>
            </button>
          </li>
          <li className="social__item">
            <button target="_blank" className="btn social">
              <span className="icon telegram"></span>
            </button>
          </li>
          <li className="social__item">
            <button target="_blank" className="btn social">
            <div class="icon-container">
    <i class="fa fa-search fa-3x" aria-hidden="true"></i>
  </div>
            </button>
          </li>
        </ul>
        <button type="button" className="btn icon" onClick={scrollToTop}>
          <span className="icon drop-up" ></span>
        </button>
      </div> */}

      <ul className="footer__list">
        <li className="footer__item active">
          <button 
          onClick={() => navigate("/")}
          className="footer__link">Home</button>
        </li>
        <li className="footer__item">
          <button 
           onClick={() => navigate("/MainAnnouncement")}
          className="footer__link">Announcement</button>
        </li>
        <li className="footer__item">
          <button 
          onClick={() => navigate("/MainRegistration")}
          className="footer__link">Registration</button>
        </li>
        <li className="footer__item">
          <button 
          onClick={() => navigate("/MainAbout")}
          className="footer__link">About US</button>
        </li>
        <li className="footer__item">
          <button 
          onClick={() => navigate("/MainSearch")}
          className="footer__link">Search</button>
        </li>
      </ul>

      <div className="footer__copyright">
        <p className="desc copyright">Ned University Of Engineering And Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
