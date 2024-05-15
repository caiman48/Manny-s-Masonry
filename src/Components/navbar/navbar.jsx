
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
<img src={logo} alt='' />
            <ul className="nav-menu">
                <li>About</li>
                <li>Contact</li>
                <li>Resume</li>
                
            </ul>
            <div className="nav-connect">Connect With Me</div>

        </div>
    )
}

export default Navbar