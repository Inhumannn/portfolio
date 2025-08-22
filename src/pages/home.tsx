import { CodeBlock } from "@/components/codeblock";
import { CvButton } from "@/components/cv-button";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/form";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";
import { SkillTech } from "@/components/skill&tech";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
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
        <section className="about">
          <div>
            <h1>
              {t("page-home.title11")}
              <span>{t("page-home.title12")}</span>
            </h1>
            <p>{t("page-home.title-description")}</p>
            <div>
              <Link to="/about">
                <Button variant="secondary">{t("page-home.aboutme")}</Button>
              </Link>
              <CvButton />
            </div>
          </div>
          <div>
            <CodeBlock />
          </div>
        </section>
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
        <section className="contact" id="contact-ancre">
          <div>
            <h2>{t("page-home.title4")}</h2>
            <p style={{ whiteSpace: "pre-line" }}>
              {t("page-home.title4-description")}
            </p>
          </div>
          <div>
            <div className="info">
              <div>
                <div id="mail-icone">
                  <Mail />
                </div>
                <div>
                  <p>Email</p>
                  <a href="mailto:thomas.pnbm@gmail.com" target="_blank">
                    thomas.pnbm@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div id="phone-icone">
                  <Phone />
                </div>
                <div>
                  <p>Phone</p>
                  <a href="tel:0743303698" target="_blank">
                    +33 07 43 30 36 98
                  </a>
                </div>
              </div>
              <div>
                <div id="mapin-icone">
                  <MapPin />
                </div>
                <div>
                  <p>Location</p>
                  <address>
                    <address>
                      <a
                        href="https://www.google.com/maps/place/Pertuis/@43.6931996,5.4932648,13z/data=!3m1!4b1!4m6!3m5!1s0x12ca271eb66c515d:0xe5bb238e7a74e150!8m2!3d43.694275!4d5.501843!16zL20vMDZoMTBx?hl=fr&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                      >
                        Pertuis, 84120
                      </a>
                    </address>
                  </address>
                </div>
              </div>
            </div>
            <div className="form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
