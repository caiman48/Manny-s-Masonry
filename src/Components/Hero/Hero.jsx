import './Hero.css';
import Rustica_img from "../../assets/Rustica.png";
import project1_img from "../../assets/project1.png"; // Asegúrate de tener esta imagen en la carpeta assets
import project2_img from "../../assets/Imagen2.png"; // Asegúrate de tener esta imagen en la carpeta assets

const Hero = () => {
  return (
    <div className="Hero">
    <div className="hero-image1-container">
      <img src={Rustica_img} className="hero-image1" alt="Rustica" />
    </div>
    <div className="text-section">
      <h2 className="text-title">
        DESIGN <span className="icon">🌿</span> BUILD <span className="icon">🌿</span> ENJOY
      </h2>
      <p className="text-subtitle">Bringing Your Creative Vision to Life</p>
    </div>
    <div className="projects-container">
      <div className="project-item">
        <img src={project1_img} alt="Project 1" className="project-image" />
        <div className="project-content">
          <h2>Modern Stone Facade</h2>
          <p>This project showcases a modern stone facade for a residential property, featuring clean lines and a combination of natural stone textures that provide a contemporary look.</p>
        </div>
      </div>
      <div className="project-item">
        <div className="project-content">
          <h2>Elegant Garden Wall</h2>
          <p>We built an elegant garden wall using carefully selected stones to blend seamlessly with the surrounding landscape, enhancing the natural beauty of the garden space.</p>
        </div>
        <img src={project2_img} alt="Project 2" className="project-image" />
      </div>
    </div>
  </div>
);
};

export default Hero;