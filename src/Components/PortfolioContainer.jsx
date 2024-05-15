import  { useState } from 'react';
import NavTabs from './NavTabs';
import Hero from './Hero/Hero';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import Footer from './Footer/Footer';
import './nav-tabs.css';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('Hero');

  const renderPage = () => {
    if (currentPage === 'Hero') {
      return <Hero />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default PortfolioContainer;