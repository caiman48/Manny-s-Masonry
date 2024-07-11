import { useState, useEffect } from "react";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./nav-tabs.css";
import "../index.css";

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState("Hero");

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the '#' from the hash
    if (hash) {
      setCurrentPage(hash.charAt(0).toUpperCase() + hash.slice(1));
    }
  }, []);

  useEffect(() => {
    if (currentPage) {
      const element = document.getElementById(currentPage.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "Hero":
        return <Hero />;
      case "About":
        return <About />;
      case "Gallery":
        return <Gallery />;
      case "Contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.location.hash = page.toLowerCase();
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="main-content">{renderPage()}</div>
      <Footer />
    </div>
  );
};

export default PortfolioContainer;