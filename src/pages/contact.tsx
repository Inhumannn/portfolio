import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/form";
import { Header } from "@/components/header";
import { SEO } from "@/components/seo";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("app.contacts")}
        description={t("page-home.title4-description")}
      />
      <div id="header-ancre"></div>
      <Header />
      <main id="contact" className="w-full overflow-hidden">
        <div className="w-full h-full">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="contact">
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
                    <p>{t("page-home.info-mail")}</p>
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
                    <p>{t("page-home.info-phone")}</p>
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
                    <p>{t("page-home.info-location")}</p>
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
        </div>
      </main>
      <Footer />
      <div className="recaptcha-notice">
        Ce site est protégé par reCAPTCHA et les
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Règles de confidentialité
        </a>
        et
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conditions d'utilisation
        </a>
        de Google s'appliquent.
      </div>
    </>
  );
}
