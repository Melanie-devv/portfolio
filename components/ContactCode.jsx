import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'internet',
    link: 'cesite.com',
    href: 'http://localhost:3000/',
  },
  {
    social: 'email',
    link: 'melanie.bulkan@ecoles-epsi.net',
    href: 'mailto:melanie.bulkan@ecoles-epsi.net',
  },
  {
    social: 'github',
    link: 'melanie-devv',
    href: 'https://github.com/Melanie-devv',
  },
  {
    social: 'linkedin',
    link: 'melanie-bulkan',
    href: 'https://www.linkedin.com/in/melanie-devv/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.réseaux</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
