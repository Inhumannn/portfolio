import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/pageTransition";
import { SchemaOrg } from "@/components/schemaOrg";
import { SEO } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { slugify } from "@/utils/slugify";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  github: string;
  image: string;
  objective: string;
  realization: string;
  result: string;
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
    <PageTransition>
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        url={`/project/${project.id}`}
      />
      <SchemaOrg
        schema={{
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.description,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
        }}
      />
      <div id="header-ancre"></div>
      <Header />
      <main id="projectDetails">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <DarkVeil />
        </div>

        <section className="detail-container">
          <div className="back-btn">
            <Button asChild variant="ghost">
              <Link
                to={`/${slugify(t("app.projects"))}`}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                {t("page-project.title")}
              </Link>
            </Button>
          </div>

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
                    aria-label={`GitHub - ${project.title}`}
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
                    aria-label={`Live Demo - ${project.title}`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-16 mb-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">Objectif</h3>
              <p className="description text-muted-foreground">
                {project.objective}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">
                Réalisation
              </h3>
              <p className="description text-muted-foreground">
                {project.realization}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">Résultat</h3>
              <p className="description text-muted-foreground">
                {project.result}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
