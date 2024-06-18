import React from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import cardbackground from '../assets/images/cardbackground.png'

const Landing = () => {
  return (
    <div>
      <Navbar /> 
      <Card
        backgroundImage={cardbackground}
        // title="Featured Content"
        // description="This is a featured content card with a background image."
      />
      <div className="main-content">
        <h2>Welcome to Our Website</h2>
        <p>This is the landing page content.</p>
      </div>
    </div>
  );
};

export default Landing;
