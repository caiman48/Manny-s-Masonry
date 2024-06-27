import './Hero.css'
import profile_img from "../../assets/profile_img.png";


const Hero = () => {
    return (
        <div className='Hero' id="hero">
         <img src={profile_img} alt="" />
         <h1><span>I am MANNY, </span> AAAAAAAAAAA</h1>
            <p>BBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
            <div className="Hero-action">
            <div className="Hero-connect">Connect with me</div>
            <div className="Hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero