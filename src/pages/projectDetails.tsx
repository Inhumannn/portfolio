import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  github: string;
  image: string;
};

export function ProjectDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const projects = t("project", { returnObjects: true }) as Project[];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="projectDetails">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <DarkVeil />
        </div>

        <section className="detail-container">
          <div className="content">
            <div className="image-container">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="info-container">
              <h1>{project.title}</h1>

              <div className="tags">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <p className="description whitespace-pre-line">
                {project.description}
              </p>

              <div className="actions">
                <Button asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
