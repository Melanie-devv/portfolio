import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import { useState, useEffect } from 'react';

const ContactPage = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      clearTimeout(fadeIn);
    };
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject:subject,
        message: message,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success'){
        alert("Message Sent."); 
        resetForm()
      } else if(data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className={styles.container} style={{ opacity, transition: 'opacity 0.5s' }}>
      <div>
        <h3 className={styles.heading}>Retrouvez moi sur :</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Ou remplissez ce formulaire</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Sujet</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
