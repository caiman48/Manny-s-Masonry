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
            Welcome to Manny&apos;s Stonework! With 20 years of experience in the stonework industry, we have built a reputation for delivering exceptional craftsmanship and quality. Our dedication to excellence has earned us the trust of our community and established us as a leading name in the field.
          </p>
          <p>
            At Manny&apos;s Stonework, we specialize in a diverse range of stonework projects, from elegant garden walls to modern stone facades. Our expertise includes inground pool installation, outdoor kitchen and BBQ areas, restaurant interior stone walls, stone fire pits and patios, garden stone walls and pathways, and cobblestone driveway installations. Our team of skilled artisans is committed to turning your creative vision into reality. We pride ourselves on our meticulous attention to detail and our ability to deliver outstanding results on time. We will discuss your ideas to bring them to life in the best possible way.
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