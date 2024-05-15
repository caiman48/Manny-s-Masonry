import './About.css';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  return (
    <div className='about' id="about">
      <h2>About Me</h2>
      <div className='about-content'>
        <img src={profile_img} alt='Profile' />
        <p>
          Hello! I am  James Ross, a Fullstack Developer with 8 months of experience in web development.
          I have a passion for creating dynamic and responsive web applications. My skills include JavaScript, React,
          Node.js, and more. I am always eager to learn new technologies and improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About;