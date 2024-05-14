import React from 'react';

function ProjectDetail() {
  return (
    <div className="project-detail">
      <div className="image-container">
        <img src="URL_DE_LA_IMAGEN" alt="Imagen del Proyecto" className="project-image" />
        <div className="image-text">
          <h2>Texto sobre la imagen</h2>
        </div>
      </div>
      <div className="project-description">
        <h3>Explicación del Proyecto</h3>
        <p>Aquí puedes proporcionar una explicación detallada de tu proyecto.</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
