import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Github, Linkedin, School } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="aboutme" className="w-full overflow-hidden">
        <div className="w-full h-full">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="z-10">
            <div>
              <h2>{t("page-about.about")}</h2>
              <p>{t("page-about.description1")}</p>
              <p>{t("page-about.description2")}</p>
              <p>{t("page-about.description3")}</p>
              <div className="icone">
                <a
                  href="https://www.linkedin.com/in/thomas-pena-bermond/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Inhumannn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.ynov.com/campus/aix-en-provence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <School />
                </a>
              </div>
            </div>
            <div>
              <img src="/img/moi.webp" alt="Inhuman" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
