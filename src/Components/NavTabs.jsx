import PropTypes from "prop-types";
import "./nav-tabs.css";

const NavTabs = ({ currentPage, handlePageChange }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#hero"
          onClick={() => handlePageChange("Hero")}
          className={currentPage === "Hero" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Gallery"
          onClick={() => handlePageChange("Gallery")}
          className={
            currentPage === "Gallery" ? "nav-link active" : "nav-link"
          }
        >
          Gallery
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

NavTabs.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default NavTabs;