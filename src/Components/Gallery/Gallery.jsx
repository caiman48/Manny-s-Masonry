import "./Gallery.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const projects = [
  {
    img: project1,
    title: "Project 1",
    
  },
  {
    img: project2,
    title: "Project 2",
    
  },
  {
    img: project3,
    title: "Project 3",
    
  },
  {
    img: project4,
    title: "Project 4",
    
  },
  {
    img: project5,
    title: "Project 5",
    
  },
  {
    img: project6,
    title: "Project 6",
    
  },
];

const Gallery = () => {
  return (
    <div className="Gallery" id="Gallery">
      <h2>Gallery</h2>
      <div className="Gallery-content">
        {projects.map((project, index) => (
          <div className="Gallery-item" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;