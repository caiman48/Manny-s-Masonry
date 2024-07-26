import React, { useState } from 'react';
import ModalImage from "react-modal-image";
import "./Gallery.css";
import { projects } from '../../assets/assets'; // Ajusta la ruta según tu estructura de carpetas

const Gallery = () => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className="Gallery" id="Gallery">
      <h2 style={{ marginTop: '50px' }}>Gallery</h2>
      <div className="Gallery-content">
        {projects.map((project, index) => (
          <div className="Gallery-item" key={index} onClick={() => setCurrentProject(project)}>
            <img src={project.preview} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {currentProject && (
        <div className="Modal">
          <button className="Close-button" onClick={() => setCurrentProject(null)}>Close</button>
          <div className="Modal-content">
            {currentProject.images.map((image, index) => (
              <div key={index} className="Modal-image">
                <ModalImage
                  small={image.src}
                  large={image.src}
                  alt={`${currentProject.title} - ${index + 1}`}
                />
                <p className="Image-comment">{image.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;