import { useState, useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/AboutPage.module.css';

export default function About() {
  const [opacity, setOpacity] = useState(0);
  const splineContainerRef1 = useRef(null);
  const splineContainerRef2 = useRef(null);
  const splineContainerRef3 = useRef(null);
  const splineContainerRef4 = useRef(null);
  const splineContainerRef5 = useRef(null);

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 100); // Commence à augmenter l'opacité après 0.1 seconde

    if (splineContainerRef1.current) {
      const CSS = new Application(splineContainerRef1.current);
      CSS.load('https://prod.spline.design/cAUm65Cq1zN5WZbw/scene.splinecode');
    }

    if (splineContainerRef2.current) {
      const HTML = new Application(splineContainerRef2.current);
      HTML.load('https://prod.spline.design/Rj5vq6sUXW-TsAlx/scene.splinecode');
    }

    if (splineContainerRef3.current) {
      const app = new Application(splineContainerRef3.current);
      app.load('https://prod.spline.design/NcEWU-zAaoZQDlyE/scene.splinecode');
    }

    if (splineContainerRef4.current) {
      const app = new Application(splineContainerRef4.current);
      app.load('https://prod.spline.design/lXqRgzMMuxV4y-Ho/scene.splinecode');
    }

    if (splineContainerRef5.current) {
      const app = new Application(splineContainerRef5.current);
      app.load('https://prod.spline.design/qPgHhlKdJwHvuj3b/scene.splinecode');
    }

    return () => {
      clearTimeout(fadeIn); 
    };
  }, []);

  return (
    <div className={styles.body} style={{ opacity, transition: 'opacity 0.5s' }}>
      <h2>Hello, je suis <b>Mélanie</b> ^^</h2><br/>
      <h3>Etudiante de deuxième année à l'EPSI Montpellier et <b>développeuse full stack</b> passionée.</h3>
      <p className={styles.grey}>Soucieuse de bien faire, mature, curieuse, autonome et épistémophile. Toutes ces qualités m'ont permis d'être l'une des meilleures élèves de ma promotion et ce depuis toujours.</p>
      <br/><a className={styles.cvbutton} href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className={styles.outlined}>Télécharger mon CV</button>
      </a>
      <h2 className={styles.aboutTitle}>Mon expertise</h2>
      <div className={styles.expertiseContainer}>
        <div className={styles.expertiseElement}>
          <FontAwesomeIcon className={styles.icon} icon={faCode} />
          <div>
            <h4>Developpement d'Applications</h4>
            <p className={styles.grey}>Maitrise des langages Python, PHP, Java, C#, Javascript, SQL, etc...</p>
          </div>
        </div>
        <div className={styles.expertiseElement}>
          <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
          <div>
              <h4>Developpement Web</h4>
              <p className={styles.grey}>Frameworks Django, VuesJS, React,... ainsi que Wordpress.</p>
          </div>
        </div>
        <div className={styles.expertiseElement}>
          <FontAwesomeIcon className={styles.icon} icon={faArrowTrendUp} />
          <div>
              <h4>Marketing Digital</h4>
              <p className={styles.grey}>Campagnes et optimisations SEO, SMO, CRM, Google Analytics,...</p>
          </div>
        </div>
      </div>
      <h2 className={styles.aboutTitle}>Mes compétences</h2>
      <p className={styles.grey} style={{ textAlign: "center"}}>(Models 3D réalisés par mes soins)</p>
      <div className={styles.skillsContainer}>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef1}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef2}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef3}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef4}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef5}></canvas>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Mon CV' },
  };
}