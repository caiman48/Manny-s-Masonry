import './About.css';
import logo from '../../assets/logo.png';

const About = () => {
  return (
    <div className='about' id="about">
      <h2>About Me</h2>
      <div className='about-content'>
        <img src={logo} alt='Profile' />
        <p>
          Hello! I am  Manny simpre llego tarde , pero mis trabajos son expectaculares 
        </p>
      </div>
    </div>
  );
};

export default About;