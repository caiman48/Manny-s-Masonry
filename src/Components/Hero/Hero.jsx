import './Hero.css'
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
    return (
        <div className='Hero'>
         <img src={profile_img} alt="" />
         <h1>I am James ross , Fullstack developer</h1>
            <p> I am a fullstack developer with 8 months of experience in web development</p>
            <div className="hero-action"></div>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    )
    }

export default Hero
