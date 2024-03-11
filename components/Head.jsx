import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SV4WGCYX9J"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SV4WGCYX9J');
      `}} />
      <title>{title}</title>
      <meta
        name="description"
        content="Mélanie Bulkan est une développeuse Full Stack passionné qui crée des sites web et des applications que vous adorerez utiliser"
      />
      <meta
        name="keywords"
        content="melanie bulkan portfolio, melanie bulkan, bulkan, developpeur web portfolio, melanie developpeur, portfolio bts sio, portfolio bts sio slam, melanie bulkan portfolio, developpeur full stack portfolio"
      />
      <meta property="og:title" content="Portfolio de Mélanie Bulkan" />
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
