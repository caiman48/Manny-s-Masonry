import "./Hero.css";
import Rustica_img from "../../assets/Rustica.png";
import project1_img from "../../assets/project1.png";
import project2_img from "../../assets/Imagen2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faBuilding,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-image1-container">
        <img src={Rustica_img} className="hero-image1" alt="Rustica" />
      </div>
      <div className="text-section">
        <h2 className="text-title">
          CRAFT <FontAwesomeIcon icon={faHammer} className="icon" /> CONSTRUCT{" "}
          <FontAwesomeIcon icon={faBuilding} className="icon" /> CELEBRATE{" "}
          <FontAwesomeIcon icon={faGlassCheers} className="icon" />
        </h2>
        <p className="text-subtitle">Where Quality Meets Craftsmanship</p>
      </div>
      <div className="projects-container">
        <div className="project-item">
          <img src={project1_img} alt="Modern Stone Pool Facade" className="project-image" />
          <div className="project-content">
            <h2>Modern Stone Pool Facade</h2>
            <p>
              This stunning pool features a modern stone facade, designed to complement the elegance of the residential setting. The natural stone finishes and clean lines create a contemporary and sophisticated look, offering a perfect space for relaxation and enjoyment.
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
          <h2>Elegant Outdoor Fireplace</h2>
            <p>
              This exquisite outdoor fireplace is crafted with meticulously selected stones, seamlessly blending with the surrounding landscape. Designed to enhance the natural beauty of the garden, this structure provides both a functional and aesthetically pleasing focal point for outdoor gatherings.
            </p>
          </div>
          <img src={project2_img} alt="Elegant Garden Wall" className="project-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;