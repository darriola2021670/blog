import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import CommentList from "./components/CommentLis.jsx";

function App() {
  const cardsData = [
    {
      imageUrl:
        "https://www.bizneo.com/blog/wp-content/uploads/2020/09/Gestion-laboral-810x455.jpg",
      title: "Gestor de empresas",
      description:
        "Una api donde se gestionara una empresa con sus ventas y gente",
      repositoryUrl: "https://github.com/darriola2021670/Gestor_Empresas",
    },
    {
      imageUrl:
        "https://github.com/darriola2021670/StrawArt1/blob/main/StrawArt/src/Imagenes/logo.png?raw=true",
      title: "Straw Art",
      description: "Una pagina donde la comunidad de arte puede convivir",
      repositoryUrl: "https://github.com/darriola2021670/StrawArt1",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
      title: "Twitch Kinal",
      description: "Una pagina de kinal donde se puede hacer streams",
      repositoryUrl: "https://github.com/darriola2021670/Twitch",
    },
  ];

  const [comments, setComments] = useState([
    { author: "Juan", content: "¡Excelente trabajo!" },
    { author: "María", content: "Me encanta este proyecto." },
    { author: "Pedro", content: "¿Cómo puedo contribuir?" },
  ]);

  const [newComment, setNewComment] = useState({ author: "", content: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.author.trim() !== "" && newComment.content.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment({ author: "", content: "" });
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const redirectToRepository = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="app">
      <Navbar />
      <h1 className="header-title">Mi Blog</h1>
      <div className="projects-header">
        <h2>Mis Proyectos</h2>
        <hr />
      </div>
      <h2>Explicación de los proyectos:</h2>
      <div className="projects-content">
        <div className="image-container">
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
            onButtonClick={() => redirectToRepository(cardData.repositoryUrl)}
          />
        ))}
      </div>
      <hr />
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
