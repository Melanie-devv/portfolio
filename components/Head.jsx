import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mélanie B. est une développeuse Full Stack passionné qui crée des sites web et des applications que vous adorerez utiliser"
      />
      <meta
        name="keywords"
        content="melanie bulkan, bulkan, developpeur web portfolio, melanie developpeur, portfolio bts sio, portfolio bts sio slam, melanie bulkan portfolio, developpeur full stack portfolio"
      />
      <meta property="og:title" content="Portfolio de Mélanie B." />
      <meta
        property="og:description"
        content="Une développeuse Full Stack passionné en BTS SIO SLAM."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mélanie B.',
};
