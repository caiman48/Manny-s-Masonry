import '../../index.css'; // Asegúrate de que esta línea esté antes
import './Header.css'; // Asegúrate de que esta línea esté después


import logo from '../../assets/logo.png';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Manny's Stonework" className="logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-menu">
          <li>
            <a
              href="#hero"
              onClick={() => handlePageChange("Hero")}
              className={currentPage === "Hero" ? "nav-link active" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Gallery"
              onClick={() => handlePageChange("Gallery")}
              className={currentPage === "Gallery" ? "nav-link active" : "nav-link"}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="phone-number">
        <a href="tel:+1234567890"><span className="phone-icon">📞</span> +1 (234) 567-890</a>
      </div>
    </div>
  );
};

export default Header;