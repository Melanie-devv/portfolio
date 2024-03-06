import { useState, useEffect } from 'react';

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
      About
    </div>
  );
}