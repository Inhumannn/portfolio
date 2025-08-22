import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Github, Linkedin, School } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/pages/about.scss";

export function About() {
  const { t } = useTranslation();
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="aboutme">
        <section>
          <div>
            <h2>{t("page-about.about")}</h2>
            <p>{t("page-about.description1")}</p>
            <p>{t("page-about.description2")}</p>
            <p>{t("page-about.description3")}</p>
            <div className="icone">
              <a href="https://laplateforme.io/prf-var-devweb/">
                <School />
              </a>
              <a href="https://www.linkedin.com/in/thomas-pena-bermond/">
                <Linkedin />
              </a>

              <a href="https://github.com/Inhumannn">
                <Github />
              </a>
            </div>
          </div>
          <div>
            <img src="/img/moi.jpg" alt="Inhuman" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
