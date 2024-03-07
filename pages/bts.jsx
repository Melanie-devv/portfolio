import { useState, useEffect } from 'react';

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
    <div style={{ opacity, transition: 'opacity 0.5s' }}>
      About
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Le BTS SIO' },
  };
}

export default GithubPage;
