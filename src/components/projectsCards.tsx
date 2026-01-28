import { Badge } from "@/components/ui/badge";
import { slugify } from "@/utils/slugify";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Project = {
  id: string;
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
  const navigate = useNavigate();
  const projects = t("project", { returnObjects: true }) as Project[];
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      {displayProjects.map((project, index) => (
        <article
          key={project.id || index}
          className="relative cursor-pointer group"
          onClick={() =>
            navigate(`/${slugify(t("app.project"))}/${project.id}`)
          }
        >
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
            <div
              className="flex gap-4 relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub - ${project.title}`}
              >
                <Github />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo - ${project.title}`}
              >
                <ExternalLink />
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
