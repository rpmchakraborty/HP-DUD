// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import downarrow from '../assets/images/downarrow.png';
import rightarrow from '../assets/images/rightarrow.png';
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
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/acts-rules" className="nav-link">Acts &amp; Rules <img src={downarrow} alt="Down Arrow" className="down-arrow" /></Link></li>
          <li><Link to="/development-plan" className="nav-link">Development Plan</Link></li>
          <li><Link to="/user-guide" className="nav-link">User Guide/Manual</Link></li>
        </ul>
        <div className="login-button">
          <button>LOGIN <img src={rightarrow} alt="Down Arrow" className="right-arrow" /></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
