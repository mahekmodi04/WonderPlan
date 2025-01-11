import React from 'react';
import './Footer.css';

const Footer = ({ handleScrollToHome, handleScrollToAbout, handleScrollToContact }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">

        <li><a href="/" onClick={handleScrollToHome} style={{ cursor: 'pointer' }}>Home</a></li>
          {/* <li><a onClick={handleScrollToHome} style={{ cursor: 'pointer' }}>Home</a></li> */}
          <li><a onClick={handleScrollToAbout} style={{ cursor: 'pointer' }}>About Us</a></li>
          <li><a onClick={handleScrollToContact} style={{ cursor: 'pointer' }}>Contact Us</a></li>
        </ul>
        <p className="footer-text">© 2024 WonderPlan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
