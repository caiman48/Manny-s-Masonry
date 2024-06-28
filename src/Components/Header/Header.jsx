import NavTabs from '../NavTabs'; // Asegúrate de ajustar la ruta si es necesario
import './Header.css';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="header">
      <div className="nav-container">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className="phone-number">
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>
    </div>
  );
};

export default Header;