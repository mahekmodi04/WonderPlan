import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';  // Add Navbar here
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User Login Submitted');
    // Navigate to the User page upon successful login
    navigate('/user');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('User Signup Submitted');
    // Navigate to the User page upon successful signup
    navigate('/user');
  };

  const loginForm = (
    <form onSubmit={handleLogin} className="login-form">
      <h2>User Login</h2>
      <input type="email" required placeholder="Enter your email" />
      <input type="password" required placeholder="Enter your password" />
      <button type="submit" className="form-button">Login</button>
      <p>
        Don't have an account?{' '}
        <span onClick={() => setIsLogin(false)} className="toggle-link">
          Sign up here
        </span>
      </p>
    </form>
  );

  const signupForm = (
    <form onSubmit={handleSignup} className="signup-form">
      <h2>User Signup</h2>
      <input type="text" required placeholder="Enter your name" />
      <input type="email" required placeholder="Enter your email" />
      <input type="password" required placeholder="Create a password" />
      <button type="submit" className="form-button">Create Account</button>
      <p>
        Already have an account?{' '}
        <span onClick={() => setIsLogin(true)} className="toggle-link">
          Login here
        </span>
      </p>
    </form>
  );

  return (
    <div className="auth-container">
      <Navbar /> {/* Add Navbar to the Login page */}
      <div className="auth-box">
        {isLogin ? loginForm : signupForm}
      </div>
    </div>
  );
};

export default Login;
