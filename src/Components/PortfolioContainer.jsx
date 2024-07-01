import  { useState } from 'react';
import NavTabs from './NavTabs';
import Hero from './Hero/Hero';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import Footer from './Footer/Footer';
import Header from './Header/Header';
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
    if (currentPage === 'Gallery') {
      return <Gallery />;
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
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Pasa las props aquí */}
      {renderPage()}
      <Footer />
    </div>
  );
};

export default PortfolioContainer;