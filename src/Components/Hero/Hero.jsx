import './Hero.css'
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
    return (
        <div className='Hero' id="hero">
         <img src={profile_img} alt="" />
         <h1><span>I am James Ross, </span> Fullstack developer</h1>
            <p> I am a fullstack developer with 6 months of experience in web development</p>
            <div className="Hero-action">
            <div className="Hero-connect">Connect with me</div>
            <div className="Hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero