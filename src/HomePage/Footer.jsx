import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you will have the CSS in a separate file.

const Footer = () => {
  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="section footer">
      <div className="footer__header">
        <a href="/" className="footer__logo">
        <img src="logo-removebg-preview.png" alt="Description" 
        style={{ width: '20%', height: '20%' }}
        />
        </a>
        <ul className="social">
          <li className="social__item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon twitter"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon youtube"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon telegram"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon whatsapp"></span>
            </a>
          </li>
        </ul>
        <button type="button" className="btn icon" onClick={scrollToTop}>
          <span className="icon drop-up"></span>
        </button>
      </div>

      <ul className="footer__list">
        <li className="footer__item active">
          <a href="#" className="footer__link">Home</a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">Services</a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">Registration</a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">About US</a>
        </li>
        <li className="footer__item">
          <a href="#" className="footer__link">Search</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <p className="desc copyright">© All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
