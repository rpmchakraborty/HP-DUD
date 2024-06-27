import React from 'react';
import './Card.css';

const Card = ({ backgroundImage, children, backgroundColor, cardHeight, style }) => {
  const combinedStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor,
    height: `${cardHeight}px`,
    ...style,
  };

  return (
    <div className="card1" style={combinedStyles}>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
