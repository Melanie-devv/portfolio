import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/ExperienceSection.module.css';

export const ExperienceSection = () => {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className={styles.work}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          //icon={}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.work}
          date="2010 - 2011"
          //icon={}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.work}
          date="2008 - 2010"
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.work}
          date="April 2013"
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};