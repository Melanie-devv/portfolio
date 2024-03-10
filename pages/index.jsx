import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fadeOut = setTimeout(() => {
      setOpacity(0);
    }, 6500);
  
    const redirect = setTimeout(() => {
      router.push('/about');
    }, 8000); 
  
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <>
      <div className={styles.container} style={{ opacity, transition: 'opacity 0.5s' }}>
        <div className={styles.background}>
          <h1>DEVELOPPEUSE</h1>
          <h1>FULL STACK</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mélanie BULKAN</h1>
            <h6 className={styles.bio}>Etudiante en BTS SIO SLAM.</h6>
            <Link href="/projects">
              <button className={styles.button}>Mes projets</button>
            </Link>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className={styles.outlined}>Télécharger mon CV</button>
            </a>
          </div>
          <Link href="/settings">
            <img src="/img.png" className={styles.illustration} alt="Ma photo d'identité" />
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Accueil' },
  };
}