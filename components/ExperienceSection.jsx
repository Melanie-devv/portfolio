import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/ExperienceSection.module.css';
import experiences from '../pages/api/experiences.json';

export const ExperienceSection = () => {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline className={styles.verticalTimeline}>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className={styles.work}
            contentArrowStyle={{ borderRight: '10px solid  black' }}
            date={experience.date}
            icon={<img src={experience.icon} alt={experience.title} style={{ borderRadius: '50%', objectFit: 'cover', height: '100%', width: '100%' }} />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
            {experience.points.map((point, i) => (
              <p className={styles.grey} key={i}>{point}</p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};