import { CodeBlock } from "@/components/codeBlock";
import { CvButton } from "@/components/cvButton";
import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projectsCards";
import { SkillTech } from "@/components/skillTech";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="home">
        <div className="w-full h-full overflow-hidden">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="about z-10">
            <div>
              <h1>
                {t("page-home.title11")}
                <span>{t("page-home.title12")}</span>
              </h1>
              <p>{t("page-home.title-description")}</p>
              <div>
                <Button asChild variant="default">
                  <Link to="/about">{t("page-home.aboutme")}</Link>
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
              <Link to="/project">{t("page-home.seemore")}</Link>
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
    </>
  );
}
