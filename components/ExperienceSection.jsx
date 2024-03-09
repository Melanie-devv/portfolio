import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  { title: 'Expérience 1', date: '2020 - présent', description: 'Description de l\'expérience 1' },
  { title: 'Expérience 2', date: '2019 - 2020', description: 'Description de l\'expérience 2' },
  // Ajoutez plus d'expériences ici
];

const ExperienceSection = () => (
  <div>
    <h2>Mes expériences</h2>
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          date={experience.date}
          position={index % 2 === 0 ? 'right' : 'left'}
        >
          <h3>{experience.title}</h3>
          <p>{experience.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

export default ExperienceSection;