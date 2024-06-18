import React from 'react';
import './Card.css';

const Card = ({ backgroundImage, title, description }) => {
  return (
    <div className="card1" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <div className="card-content1">
        <h3 className="card-title1">{title}</h3>
        <p className="card-description1">{description}</p>
      </div> */}
    </div>
  );
};

export default Card;
