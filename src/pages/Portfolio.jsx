
import PortfolioItem from '../components/PortfolioItem'; 

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'http://example.com/project1',
      github: 'http://github.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'http://example.com/project2',
      github: 'http://github.com/project2',
    },
    
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