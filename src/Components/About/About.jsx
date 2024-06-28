import './About.css';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  return (
    <div className='about' id="about">
      <h2>About Me</h2>
      <div className='about-content'>
        <img src={profile_img} alt='Profile' />
        <p>
          Hello! I am  Manny blablablablablablabla
        </p>
      </div>
    </div>
  );
};

export default About;