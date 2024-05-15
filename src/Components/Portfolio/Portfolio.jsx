import "./Portfolio.css";
import project1 from "../../assets/project1.png"; // Asegúrate de tener estas imágenes en la carpeta de assets
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-content">
        <div className="portfolio-item">
          <img src={project1} alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="portfolio-item">
          <img src={project2} alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        <div className="portfolio-item">
          <img src={project3} alt="Project 3" />
          <h3>Project 3</h3>
          <p>Description of Project 3.</p>
        </div>
        <div className="portfolio-item">
          <img src={project4} alt="Project 4" />
          <h3>Project 4</h3>
          <p>Description of Project 4.</p>
        </div>
        <div className="portfolio-item">
          <img src={project5} alt="Project 5" />
          <h3>Project 5</h3>
          <p>Description of Project 5.</p>
        </div>
        <div className="portfolio-item">
          <img src={project6} alt="Project 6" />
          <h3>Project 6</h3>
          <p>Description of Project 6.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
