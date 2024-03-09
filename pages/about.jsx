import { useState, useEffect } from 'react';
import styles from '../styles/AboutPage.module.css';

export default function About() {
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
    <div style={{ opacity, transition: 'opacity 0.5s' }}>
      <h2>Hello, je suis Mélanie ^^</h2><br/>
      <h3>Etudiante de deuxième année à l'EPSI Montpellier et développeuse full stack passionée.</h3>
      <p className={styles.grey}>Soucieuse de bien faire, mature, bien organisée et autonome. Toutes ces qualités m'ont permis d'être l'une des meilleures élèves de ma promotion et ce depuis toujours.</p>
      <a className={styles.cvbutton} href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className={styles.outlined}>Télécharger mon CV</button>
      </a>
      <h3>Mon expertise</h3>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Mon CV' },
  };
}