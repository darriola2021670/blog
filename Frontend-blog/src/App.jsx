import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import CommentList from './components/CommentLis.jsx';

function App() {
  const cardsData = [
    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      title: 'Título de la tarjeta 1',
      description: 'Descripción de la tarjeta 1',
    },
    {
      imageUrl: 'URL_DE_LA_IMAGEN_2',
      title: 'Título de la tarjeta 2',
      description: 'Descripción de la tarjeta 2',
    },
    {
      imageUrl: 'URL_DE_LA_IMAGEN_3',
      title: 'Título de la tarjeta 3',
      description: 'Descripción de la tarjeta 3',
    },
    // Agrega más objetos de datos para más tarjetas si es necesario
  ];

  const [comments, setComments] = useState([
    { author: 'Juan', content: '¡Excelente trabajo!' },
    { author: 'María', content: 'Me encanta este proyecto.' },
    { author: 'Pedro', content: '¿Cómo puedo contribuir?' },
  ]);

  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.author.trim() !== '' && newComment.content.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment({ author: '', content: '' });
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="app">
      <Navbar />
      <h1 className="header-title">Mi Blog</h1>
      <div className="projects-header">
        <h2>Mis Proyectos</h2>
        <hr />
      </div>
      <div className="projects-content">
        <div className="image-container">
          <img src="./components/images/codigo.jpg" alt="Proyectos" className="project-image" />
          <div className="image-text">
            <p>Aquí puedes encontrar una breve descripción de mis proyectos.</p>
          </div>
        </div>
      </div>
      <div className="cards-container">
        {cardsData.map((cardData, index) => (
          <Card
            key={index}
            imageUrl={cardData.imageUrl}
            title={cardData.title}
            description={cardData.description}
          />
        ))}
      </div>
      <hr />
      <h2>Explicación de los proyectos:</h2>
      <CommentList comments={comments} />
      <div className="comment-form">
        <h3>Deja un comentario:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="author"
            placeholder="Nombre"
            value={newComment.author}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="Escribe tu comentario aquí..."
            value={newComment.content}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit">Enviar comentario</button>
        </form>
      </div>
    </div>
  );
}

export default App;
