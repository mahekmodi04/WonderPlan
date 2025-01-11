import React, { useState } from 'react';
import './NavUser.css'; // Custom styles for the user navbar

const NavUser = ({ handleScrollToChatbot }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <h2>WonderPlan</h2>
      </div>
      <ul className="nav-links">
        <li><a href="/" onClick={() => window.location.href = '/'}>Home</a></li>
        <li><a onClick={handleScrollToChatbot}>Chatbot</a></li>
        <li>
          {/* Profile Circle Icon */}
          <div className="profile-icon" onClick={toggleProfileMenu}>
            <img src="/path-to-user-icon.jpg" alt="User Profile" />
          </div>
        </li>
      </ul>
      
      {/* Side Menu for Profile */}
      {isProfileMenuOpen && (
        <div className="profile-menu">
          <ul>
            <li><a href="/user/account">My Account</a></li>
            <li><a href="/user/bookings">My Bookings</a></li>
            <li><a href="/user/search-history">My Search History</a></li>
            <li><a href="/user/logout">Logout</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavUser;
