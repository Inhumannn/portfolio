import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  skills: string[];
  link: string;
  github: string;
  image: string;
};

type ProjectsCardsProps = {
  limit?: number;
};

export function ProjectsCards({ limit }: ProjectsCardsProps) {
  const { t } = useTranslation();
  const projects = t('project', { returnObjects: true }) as Project[];
  const displayProjects = limit ? projects.slice(-limit) : projects;

  return (
    <>
      {displayProjects.map((project, index) => (
        <article key={index}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <div>
            <h3>{project.title} </h3>
            <p>{project.description} </p>
            <div>
              {project.skills.map((skill, i) => (
                <Badge variant="outline" key={i}>
                  {skill}
                </Badge>
              ))}
            </div>
            <div>
              <a href={project.github} target="_blank">
                <Github />
              </a>
              <a href={project.link} target="_blank">
                <ExternalLink />
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
