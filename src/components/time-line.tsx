import { useTranslation } from "react-i18next";

type Timeline = {
  dateTime: string;
  title: string;
  enterprise: string;
  description: string;
  tags: string[];
  achievements: string[];
};

export function TimeLine() {
  const { t } = useTranslation();
  const timelines = t("timeline", { returnObjects: true }) as Timeline[];

  if (!Array.isArray(timelines)) {
    return null;
  }

  return (
    <>
      {timelines.map((timeline, index) => (
        <div key={index}>
          <div className="timeline-box">
            <div className="timeline-date">
              <p>{timeline.dateTime}</p>
            </div>
            <div className="timeline-content">
              <h3>{timeline.title}</h3>
              <h4>{timeline.enterprise}</h4>
              <p>{timeline.description}</p>
              <div className="timeline-tags">
                {timeline.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="timeline-achievements">
            <ul className="timeline-achievement">
              {timeline.achievements.map((ach, j) => (
                <li key={j}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
