import { CodeBlock } from "@/components/codeblock";
import { CvButton } from "@/components/cvButton";
import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/pageTransition";
import { ProjectsCards } from "@/components/projectsCards";
import { SchemaOrg } from "@/components/schemaOrg";
import { SEO } from "@/components/seo";
import { SkillTech } from "@/components/skillTech";
import { Button } from "@/components/ui/button";
import { slugify } from "@/utils/slugify";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Home() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <SEO
        title={t("page-home.title")}
        description={t("page-home.title-description")}
      />
      <SchemaOrg
        schema={{
          "@type": "Person",
          name: "Thomas Pena Bermond",
          jobTitle: "Développeur Full Stack",
          url: "https://thmsfolio.vercel.app",
          sameAs: [
            "https://github.com/Inhumannn",
            "https://www.linkedin.com/in/thomas-pena-bermond",
          ],
        }}
      />
      <div id="header-ancre"></div>
      <Header />
      <main id="home">
        <div className="w-full h-full overflow-hidden">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="about z-10">
            <div>
              <h1 id="title-home">
                {t("page-home.title11")}
                <span>{t("page-home.title12")}</span>
              </h1>
              <p>{t("page-home.title-description")}</p>
              <div>
                <Button asChild variant="default">
                  <Link to={`/${slugify(t("app.about"))}`}>
                    {t("page-home.aboutme")}
                  </Link>
                </Button>
                <CvButton />
              </div>
            </div>
            <div>
              <CodeBlock />
            </div>
          </section>
        </div>
        <section className="project">
          <div>
            <h2>{t("page-home.title2")}</h2>
            <p className="whitespace-pre-line">
              {t("page-home.title2-description")}.
            </p>
          </div>
          <div>
            <ProjectsCards limit={3} />
          </div>
          <div>
            <Button asChild>
              <Link to={`/${slugify(t("app.projects"))}`}>
                {t("page-home.seemore")}
              </Link>
            </Button>
          </div>
        </section>
        <section className="skill">
          <div>
            <h2>{t("page-home.title3")}</h2>
            <p className="whitespace-pre-line">
              {t("page-home.title3-description")}
            </p>
          </div>
          <div>
            <SkillTech />
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
