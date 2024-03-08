import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    if (window.innerWidth > 900) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.card}>
      <div>
        <div onClick={openModal}>
          <Image src={project.image} height={400} width={600} alt={project.name} />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className={styles.customStyles}
        >
          <Image src={project.image} height={600} width={900} alt={project.name} />
        </Modal>
        <div className={styles.content}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            En savoir plus
          </a>
        </div>
    </div>
  );
};

export default ProjectCard;
