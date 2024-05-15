import "./Resume.css";
import resumePDF from "../../assets/resume.pdf"; // Asegúrate de tener el archivo resume.pdf en la carpeta assets

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <a href={resumePDF} download="James_Ross_Resume.pdf">
          Download Resume
        </a>
        <h3>Proficiencies</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>HTML & CSS</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MERN Stack</li>
          <li>PWA</li>
          <li>NoSQL</li> 
          <li>Git & GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
