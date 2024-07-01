import './Hero.css'
import profile_img from "../../assets/profile_img.png";
import Rustica_img from "../../assets/Rustica.png"; // Importa la imagen renombrada


const Hero = () => {
    return (
        <div className='Hero' id="hero">
         <img src={profile_img} alt="Profile" className="hero-image" />
         <img src={Rustica_img} alt="Rustica" className="hero-Rustica-image" />
         <h1>Manny&apos;s Stone Work</h1>
            <p>BBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
            <div className="Hero-action">
            <div className="Hero-connect">Contact Me </div>
            <div className="Hero-resume"> My work </div>
            </div>
        </div>
    )
}

export default Hero