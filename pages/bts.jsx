import { useState, useEffect } from 'react';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
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
      <h2>Présentation du BTS SIO</h2><br/><br/>
      <p>Le BTS <b>Services Informatique aux Organisations</b> est un diplôme reconnu par l’état de niveau Bac+2. Il remplace depuis septembre 2011 l’ancien BTS informatique de Gestion (BTS IG).</p><br/>
      <p>Il s’adresse à ceux qui souhaitent se former en deux ans aux métiers d’administrateur réseau ou de développeur pour intégrer directement le marché du travail ou continuer des études dans le domaine de l’informatique.</p><br />
      <p>Le programme a évolué en fonction de la place et du rôle des TIC (Technologies d’Information Communication) et propose deux spécialités bien distinctes : le BTS SIO SISR et le BTS SIO SLAM.</p><br/><br/>

      <h3 style={{textAlign: "center"}}>Les options du BTS SIO</h3>
      <div className={styles.optionContainer}>
        <div className={styles.optionElement}>
          <h3 className={styles.optionTitle}>SLAM</h3>
          <p className={styles.optionDescr}>L’option <b>Solutions Logicielles et Applications Métiers</b> forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement Full Stack, intégration au sein de la société).</p>
          <p><b>Voici quelques exemples de métiers :</b></p>
          <ul>
            <li>• Développeur d’applications informatiques</li>
            <li>• Chargé d’études informatiques</li>
            <li>• Programmeur d’applications</li>
            <li>• Responsable des services applicatifs</li>
            <li>• Technicien d’études informatiques</li>
          </ul>
        </div>
        <div className={styles.optionElement}>
          <h3 className={styles.optionTitle}>SISR</h3>
          <p className={styles.optionDescr}>L’option <b>Solutions d’Infrastructure, Systèmes et Réseaux</b> forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité). Etre capable de gérer et d’administrer le réseau d’une société et d’assurer sa sécurité et sa maintenance.</p>
          <p><b>Voici quelques exemples de métiers :</b></p>
          <ul>
            <li>• Technicien systèmes et réseaux</li>
            <li>• Administrateur systèmes et réseaux</li>
            <li>• Support systèmes et réseaux</li>
            <li>• Technicien de production</li>
            <li>• Technicien d’infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Le BTS SIO' },
  };
}

export default GithubPage;
