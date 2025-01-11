import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer'; // Keep Footer on all pages
import Home from './Pages/Home/Home';  // Home Page
import Login from './Pages/Login/Login';  // Login Page
import User from './Pages/User/User';  // User Page (with its own NavUser)

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page with Navbar */}
          <Route path="/login" element={<Login />} /> {/* Login page with Navbar */}
          <Route path="/user" element={<User />} /> {/* User page with NavUser */}
        </Routes>
      </div>
      
      {/* Footer should always be rendered */}
      <Footer />
    </>
  );
}

export default App;
