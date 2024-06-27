import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <a href={resumePDF} download="Manny.pdf">
          Download Resume
        </a>
        <h3>Proficiencies</h3>
        <ul>
         <li>Git & GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
