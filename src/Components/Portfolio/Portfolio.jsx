import "./Portfolio.css";
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
    description: "Description of Project 1.",
    liveLink: "https://matae300.github.io/MovieMingle-Project/",
    githubLink: "https://github.com/Matae300/MovieMingle-Project"
  },
  {
    img: project2,
    title: "Project 2",
    description: "Description of Project 2.",
    liveLink: "https://caiman48.github.io/Weather-Dashboard/",
    githubLink: "https://github.com/caiman48/Weather-Dashboard"
  },
  {
    img: project3,
    title: "Project 3",
    description: "Description of Project 3.",
    liveLink: "https://caiman48.github.io/Code-Quiz/",
    githubLink: "https://github.com/caiman48/Code-Quiz"
  },
  {
    img: project4,
    title: "Project 4",
    description: "Description of Project 4.",
    liveLink: "https://caiman48.github.io/password-generate/",
    githubLink: "https://github.com/caiman48/password-generate"
  },
  {
    img: project5,
    title: "Project 5",
    description: "Description of Project 5.",
    liveLink: "https://caiman48.github.io/Work-Day-Scheduler/",
    githubLink: "https://github.com/caiman48/Work-Day-Scheduler"
  },
  {
    img: project6,
    title: "Project 6",
    description: "Description of Project 6.",
    liveLink: "https://taskapp1-2b375c46f997.herokuapp.com/",
    githubLink: "https://github.com/StrolineDigital/Taskr"
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-content">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;