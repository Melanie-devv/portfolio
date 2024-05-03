import { useState, useEffect } from 'react';
import styles from '../styles/GithubPage.module.css';

const Epreuve5 = ({ repos, user }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 100); // Commence à augmenter l'opacité après 0.1 seconde

    return () => {
      clearTimeout(fadeIn);
    };
  }, []);

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
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'E5' },
  };
}

export default Epreuve5;
