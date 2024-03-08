import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import { useState, useEffect } from 'react';

const ProjectsPage = ({ projects }) => {
  const [opacity, setOpacity] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      clearTimeout(fadeIn);
    };
  }, []);

  const handleFilterChange = (theme) => {
    setFilter(theme);
  };

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.theme === filter);

  const themes = ['all', ...new Set(projects.map(project => project.theme))];

  return (
    <>
      <h3>Une petite liste de mes projets</h3>
      <div className={styles.boutons}>
        {themes.map(theme => (
          <a 
          key={theme} 
          onClick={() => handleFilterChange(theme)} 
          className={`${styles.underline} ${filter === theme ? styles.active : ''}`}
          >
            {theme === 'all' ? 'Tous' : theme}
          </a>
        ))}
      </div>
      <div className={styles.container} style={{ opacity, transition: 'opacity 0.5s' }}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Mes projets', projects },
  };
}

export default ProjectsPage;