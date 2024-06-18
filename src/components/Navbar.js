// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navheader from '../assets/images/navheader.png'
import cardframe from '../assets/images/cardframe.png'


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="card">
      <img src={cardframe} alt="Card" className="card-image" />        
      <img src={navheader} alt="Card" className="card-image" />        
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/acts-rules">Acts &amp; Rules</Link></li>
          <li><Link to="/development-plan">Development Plan</Link></li>
          <li><Link to="/user-guide">User Guide/Manual</Link></li>
        </ul>
        <div className="login-button">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
