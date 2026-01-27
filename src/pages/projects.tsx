import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/pageTransition";
import { ProjectsCards } from "@/components/projectsCards";
import { SEO } from "@/components/seo";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <SEO
        title={t("app.projects")}
        description={t("page-project.description")}
        url="/projects"
      />
      <div id="header-ancre"></div>
      <Header />
      <main id="projects" className="relative w-full overflow-hidden">
        <div className="relative w-full h-full">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="relative z-10">
            <div>
              <h1>{t("page-project.title")}</h1>
              <p>{t("page-project.description")}</p>
            </div>
            <div>
              <ProjectsCards />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
