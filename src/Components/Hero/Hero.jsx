import './Hero.css'
import profile_img from "../../assets/profile_img.png";
import Rustica_img from "../../assets/Rustica.png"; // Importa la imagen renombrada


const Hero = () => {
    return (
        <div className='Hero' id="hero">
            <div className='Hero-images'>
                <img src={profile_img} className="hero-image" alt="Image 1" />
                <img src={Rustica_img} className="hero-image" alt="Image 2" />
            </div>
            <h1>Manny&apos;s Stone Work</h1>
            <p>BBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
            <div className="Hero-action">
                <div className="Hero-connect">Contact Me</div>
                <div className="Hero-resume">My work</div>
            </div>
        </div>
    )
}

export default Hero