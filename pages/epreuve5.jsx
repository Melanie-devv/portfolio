import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import { useState, useEffect } from 'react';
import styles from '../styles/GithubPage.module.css';

const Epreuve5 = ({ projects }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      clearTimeout(fadeIn);
    };
  }, []);

  const filteredProjects = projects.filter(project => project.theme === 'Situation BTS');

  return (
    <div className={styles.body} style={{ opacity, transition: 'opacity 0.5s' }}>
      <h2>Page épreuve E5 (pour le BTS)</h2><br/><br/>
      <div className={styles.buttonContainer}>
        <a href="/projets/Rapport_Situation1.pdf" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Situation 1</button>
        </a>
        <a href="/projets/Rapport_Situation2.pdf" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Situation 2</button>
        </a>
      </div>
      <div className={styles.container} style={{ opacity, transition: 'opacity 0.5s' }}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = getProjects();
  
  return {
    props: { title: 'E5', projects },
  };
}

export default Epreuve5;
