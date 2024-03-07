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
      <h3>
      Mes veilles technologiques
        {/* Recent Posts from{' '}
        <a
          href="/bts"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a> */}
      </h3>
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