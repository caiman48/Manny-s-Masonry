import "./Footer.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/caiman48?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/youruserid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
