import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import "../styles/components/projects-cards.scss";

type Project = {
  title: string;
  description: string;
  skills: string[];
  link: string;
  github: string;
  image: string;
};

export function ProjectsCards() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      {projects.slice(-3).map((project, index) => (
        <article key={index}>
          <img src={project.image} alt={project.title} />
          <div>
            <h3>{project.title} </h3>
            <p>{project.description} </p>
            <div>
              {project.skills.map((skill, i) => (
                <Badge variant="default" key={i}>
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
