import { useState, useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/AboutPage.module.css';
import { Experience } from '../components/ExperienceSection';


export default function About() {
  const [opacity, setOpacity] = useState(0);
  const splineContainerRef1 = useRef(null);
  const splineContainerRef2 = useRef(null);
  const splineContainerRef3 = useRef(null);
  const splineContainerRef4 = useRef(null);
  const splineContainerRef5 = useRef(null);
  const splineContainerRef6 = useRef(null);
  const splineContainerRef7 = useRef(null);
  const splineContainerRef8 = useRef(null);
  const splineContainerRef9 = useRef(null);
  const splineContainerRef10 = useRef(null);
  const splineContainerRef11 = useRef(null);
  const splineContainerRef12 = useRef(null);
  const splineContainerRef13 = useRef(null);
  const splineContainerRef14 = useRef(null);

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
      app.load('https://prod.spline.design/lFXDVnym7XhfBBpS/scene.splinecode');
    }

    if (splineContainerRef6.current) {
      const app = new Application(splineContainerRef6.current);
      app.load('https://prod.spline.design/qPgHhlKdJwHvuj3b/scene.splinecode');
    }

    if (splineContainerRef7.current) {
      const app = new Application(splineContainerRef7.current);
      app.load('https://prod.spline.design/8JI8D6CPTztecQTI/scene.splinecode');
    }

    if (splineContainerRef8.current) {
      const app = new Application(splineContainerRef8.current);
      app.load('https://prod.spline.design/YVONpamfYUqZnj6Q/scene.splinecode');
    }

    if (splineContainerRef9.current) {
      const app = new Application(splineContainerRef9.current);
      app.load('https://prod.spline.design/ApemgRG4REGYGdqi/scene.splinecode');
    }

    if (splineContainerRef10.current) {
      const app = new Application(splineContainerRef10.current);
      app.load('https://prod.spline.design/NWqsdD-scThOg79x/scene.splinecode');
    }

    if (splineContainerRef11.current) {
      const app = new Application(splineContainerRef11.current);
      app.load('https://prod.spline.design/XY26UtDdK8xRTId0/scene.splinecode');
    }

    if (splineContainerRef12.current){
      const app = new Application(splineContainerRef12.current);
      app.load('https://prod.spline.design/cg2VH-HeBIMZsvI5/scene.splinecode');
    }

    if (splineContainerRef13.current){
      const app = new Application(splineContainerRef13.current);
      app.load('https://prod.spline.design/kp4gaiKutWP7bSOY/scene.splinecode');
    }

    if (splineContainerRef14.current){
      const app = new Application(splineContainerRef14.current);
      app.load('https://prod.spline.design/LgZZewqv0DdIdqqT/scene.splinecode');
    }

    return () => {
      clearTimeout(fadeIn); 
    };
  }, []);

  return (
    <div className={styles.body} style={{ opacity, transition: 'opacity 0.5s' }}>
      <h2>Hello, je suis <b>Mélanie</b> ^^</h2><br/>
      <h3>Etudiante de deuxième année à l'EPSI Montpellier et <b>développeuse full stack</b> passionée.</h3>
      <p className={styles.grey}>Soucieuse de bien faire, créative, mature, autonome et épistémophile. Toutes ces qualités m'ont permis d'être l'une des meilleures élèves de ma promotion et ce depuis toujours.</p>
      <br/><a className={styles.cvbutton} href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className={styles.outlined}>Télécharger mon CV</button>
      </a>
      <h2 className={styles.aboutTitle}>Mon expertise</h2>
      <div className={styles.expertiseContainer}>
        <div className={styles.expertiseElement}>
          <FontAwesomeIcon className={styles.icon} icon={faCode} />
          <div>
            <h4>Développement d'Applications</h4>
            <p className={styles.grey}>Maitrise des langages Python, PHP, Java, C#, Javascript, SQL, etc...</p>
          </div>
        </div>
        <div className={styles.expertiseElement}>
          <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
          <div>
              <h4>Développement Web</h4>
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
      <p className={styles.grey} style={{ textAlign: "center"}}>(Modèles 3D et interractifs réalisés par mes soins.)</p>
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
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef6}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef7}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef8}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef9}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef10}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef11}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef12}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef13}></canvas>
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={splineContainerRef14}></canvas>
        </div>
      </div>
      <h2 className={styles.aboutTitle}>Mes expériences</h2>
      <Experience />
      <hr className={styles.hrStyle} />
      <div className={styles.footer}>
        <a href="/contact">
          <h3>Vous avez un projet à réaliser ?</h3>
          <h3>Je suis disponible à l'embauche !</h3>
        </a>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Mon CV' },
  };
}