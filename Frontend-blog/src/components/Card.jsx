import React from 'react';

function Card({ imageUrl, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt="Imagen" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
