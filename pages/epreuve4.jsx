import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import { useState, useEffect } from 'react';

const Epreuve4 = ({ projects }) => {
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

  const filteredProjects = projects.filter(project => (filter === 'all' ? true : project.theme === filter) && project.bts === true);

  const themes = ['all', ...new Set(projects.map(project => project.theme))];

  return (
    <>
      <h3>Page épreuve E4 (pour le BTS)</h3><br /><br />
      <div className={styles.buttonContainer}>
        <a href="/TableauSynthese.pdf" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Mon tableau de compétences</button>
        </a>
      </div>
      <div className={styles.boutons}>
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
    props: { title: 'E4', projects },
  };
}

export default Epreuve4;