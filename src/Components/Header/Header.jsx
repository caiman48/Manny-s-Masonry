import './Header.css';
import headerImage from '../../assets/Header.png'; // Adjust the path accordingly

const Header = () => {
  return (
    <div className="header">
      <img src={headerImage} alt="Header" />
    </div>
  );
};

export default Header;