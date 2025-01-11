import React from 'react';
import './Navbar.css';

const Navbar = ({handleScrollToHome, handleScrollToAbout, handleScrollToFAQ, handleScrollToContact }) => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <h1>WonderPlan</h1>
      </div>
      <ul className="nav-links">
      <li><a href="/" onClick={handleScrollToHome}>Home</a></li>
        <li><a onClick={handleScrollToAbout}>About Us</a></li>
        <li><a onClick={handleScrollToFAQ}>FAQs</a></li>
        <li><a onClick={handleScrollToContact}>Contact Us</a></li>
        <li><a href="/login">Login/Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
