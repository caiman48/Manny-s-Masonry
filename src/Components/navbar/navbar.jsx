import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="" />
        <ul className="nav-menu">
          <li>
            <a href="#hero">Portfolio</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
