import './About.css';
import logo from '../../assets/logo.png';

const About = () => {
  return (
    <div className='about' id="about">
      <h2>About Us</h2>
      <div className='about-content'>
        <img src={logo} alt="Manny's Stonework Logo" className='about-logo' />
        <div className='about-text'>
          <p>
            Welcome to Manny&apos;s Stonework! Established two years ago, we have rapidly expanded our services to bring exceptional stonework to our community. Our commitment to quality and craftsmanship has made us a trusted name in the industry.
          </p>
          <p>
            At Manny&apos;s Stonework, we specialize in a variety of stonework projects, from elegant garden walls to modern stone facades. Our team of skilled artisans is dedicated to transforming your creative vision into reality. We take pride in our attention to detail and our ability to deliver outstanding results on time.
          </p>
          <p>
            Join us on this exciting journey as we continue to grow and bring more beautiful and durable stonework to our valued clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;