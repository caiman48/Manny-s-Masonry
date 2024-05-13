import React from "react";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => {
  const projects = [
    // Add your projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <PortfolioItem key={index} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
