import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import { useState, useEffect } from 'react';

const ProjectsPage = ({ projects }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      clearTimeout(fadeIn);
    };
  }, []);

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container} style={{ opacity, transition: 'opacity 0.5s' }}>
        {projects.map((project) => (
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
