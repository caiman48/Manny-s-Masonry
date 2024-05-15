import { useState } from "react";
import NavTabs from "./NavTabs";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import "./nav-tabs.css";

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState("Hero");

  const renderPage = () => {
    if (currentPage === "Hero") {
      return <Hero />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default PortfolioContainer;
