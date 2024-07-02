import '../../index.css'; // Asegúrate de que esta línea esté antes
import './Header.css'; // Asegúrate de que esta línea esté después

import NavTabs from '../NavTabs';
import logo from '../../assets/logo.png';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Manny's Stonework" className="logo" />
      </div>
      <div className="nav-container">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className="phone-number">
        <a href="tel:+1234567890"><span className="phone-icon">📞</span> +1 (234) 567-890</a>
      </div>
    </div>
  );
};

export default Header;