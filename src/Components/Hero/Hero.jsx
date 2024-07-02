import './Hero.css'
import profile_img from "../../assets/profile_img.png";
import Rustica_img from "../../assets/Rustica.png"; // Importa la imagen renombrada


const Hero = () => {
    return (
      <div className="Hero">
        <div className="hero-image1-container">
          <img src={Rustica_img} className="hero-image1" alt="Profile" />
        </div>
        <div className="Hero-images">
          <img src={profile_img} className="hero-image2" alt="Rustica" />
        </div>
        <div className="hero-text">
          <h1>Manny&apos;s Stone Work</h1>
          <p>BBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
          <div className="hero-action">
            <div className="hero-connect">Contact Me</div>
            <div className="hero-resume">My work</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;