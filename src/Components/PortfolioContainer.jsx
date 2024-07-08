import { useState } from "react";

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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="main-content">{renderPage()}</div>
      <Footer />
    </div>
  );
};

export default PortfolioContainer;
