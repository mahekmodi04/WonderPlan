import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { assets } from '../../assets/assets'; // Importing frontpage from assets.js

const Header = () => {
  const navigate = useNavigate(); // For navigation to login/signup page

  const handleButtonClick = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="header">
      <div className="hero-image" style={{ backgroundImage: `url(${assets.frontpage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to WonderPlan</h1>
          <p className="hero-description">
            Your perfect travel planner to make your trips smooth, easy, and unforgettable!
          </p>
          <button className="hero-button" onClick={handleButtonClick}>
            Plan My Trip 
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
