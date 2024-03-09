import { motion } from "framer-motion";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import EXPERIENCES from "../pages/api/experiences.json";
import "react-vertical-timeline-component/style.min.css";

// SectionWrapper
const SectionWrapper = ({ children, idName }) => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <span id={idName}>
      &nbsp;
    </span>
    {children}
  </motion.section>
);

// Experience Card
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836"}}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3>{experience.title}</h3>
      <p style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points */}
    <ul>
      {experience.points.map((point, i) => (
        <li key={`experience-point-${i}`}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <div>
        <VerticalTimeline>
          {EXPERIENCES.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};