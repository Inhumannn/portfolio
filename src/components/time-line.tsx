import { useEffect, useState } from "react";

type Experience = {
  dateTime: string;
  title: string;
  enterprise: string;
  description: string;
  tags: string[];
  achievements: string[];
};

export function TimeLine() {
  const [experiences, setExperices] = useState<Experience[]>([]);
  useEffect(() => {
    fetch("/data/experience.json")
      .then((response) => response.json())
      .then((data) => setExperices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index}>
          <div className="timeline-box">
            <div className="timeline-date">
              <p>{experience.dateTime}</p>
            </div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <h4>{experience.enterprise}</h4>
              <p>{experience.description}</p>
              <div className="timeline-tags">
                {experience.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="timeline-achievements">
            <ul className="timeline-achievement">
              {experience.achievements.map((ach, j) => (
                <li key={j}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
