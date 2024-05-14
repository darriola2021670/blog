import React from "react";

function Card({ imageUrl, title, description, onButtonClick }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Imagen" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button onClick={onButtonClick}>Ver Repositorio</button>
      </div>
    </div>
  );
}

export default Card;
