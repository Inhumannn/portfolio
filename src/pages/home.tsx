import { CodeBlock } from "@/components/codeblock";
import { CvButton } from "@/components/cv-button";
import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";
import { SkillTech } from "@/components/skill&tech";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/pages/home.scss";

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
                <Link to="/about">
                  <Button variant="default">{t("page-home.aboutme")}</Button>
                </Link>
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
            <p style={{ whiteSpace: "pre-line" }}>
              {t("page-home.title2-description")}.
            </p>
          </div>
          <div>
            <ProjectsCards limit={3} />
          </div>
          <div>
            <Link to="/project">
              <Button>{t("page-home.seemore")}</Button>
            </Link>
          </div>
        </section>
        <section className="skill">
          <div>
            <h2>{t("page-home.title3")}</h2>
            <p style={{ whiteSpace: "pre-line" }}>
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
