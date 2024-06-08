import fs from 'fs';
import path from 'path';
import { useState, useEffect } from 'react';

import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
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
      <h3>Mes veilles technologiques</h3>
      <p>Dans le cadre de ma formation BTS SIO option SLAM, j'ai effectué plusieurs veilles technologiques sur des sujets d'actualité liés au développement d'applications web, mobiles ainsi qu'à l'IT en général et aux nombreuses innovations de ce secteur. Cette activité m'a permis de rester informé des dernières tendances et évolutions dans ce domaine en constante mutation.</p>
      <h4>Outil principal : Feedly</h4>
      <p>Pour mener efficacement ma veille, j'ai principalement utilisé Feedly, un agrégateur de flux RSS puissant.</p>
      <h4>Outils et méthodes utilisés</h4>
      <ol>
        <li><strong>Flux RSS :</strong> J'ai configuré des flux RSS agrégés dans un lecteur pour suivre les actualités de blogs techniques, sites d'informations spécialisés et comptes Twitter influents.</li>
        <li><strong>Alertes Google :</strong> J'ai créé des alertes Google sur des mots-clés spécifiques pour être notifié des nouveaux contenus pertinents.</li>
        <li><strong>Actualités :</strong> En parcourant les actualités directement sur google, des jounaux tels que le parision ou le monde, des sites d'actualité spécialisé dans le numérique comme 01net.com, lesnumeriques.com, etc..</li>
        <li><strong>Recherche manuelle : </strong> En complément, j'ai effectué une veille manuelle en parcourant régulièrement des sites de référence, des forums de discussion et des chaînes YouTube dédiées. (comme Grafikart, Tech & Co, etc...)</li>
      </ol>
      <div className={styles.container} style={{ opacity, transition: 'opacity 0.5s' }}>
      {Array.isArray(articles) ? articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      )) : null}
      </div>
    </>
  );
};

export async function getStaticProps() {
  
  const filePath = path.join(process.cwd(), 'pages/api/articles.json');

  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);

  return {
    props: { title: 'Mes veilles techno', articles: data },
    revalidate: 60,
  };
}

export default ArticlesPage;