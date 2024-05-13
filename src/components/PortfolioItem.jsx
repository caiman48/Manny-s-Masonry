

const PortfolioItem = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link}>View Project</a>
      <a href={project.github}>View Code</a>
    </div>
  );
};

export default PortfolioItem;
