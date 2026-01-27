import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SEO } from "@/components/seo";
import { TimeLine } from "@/components/timeLine";
import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <div id="header-ancre"></div>
      <SEO
        title={t("page-experience.title")}
        description={t("page-experience.description")}
      />
      <Header />
      <main id="experience" className="w-full overflow-hidden">
        <div className="w-full h-full">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="z-10 about">
            <div>
              <h1>{t("page-experience.title")}</h1>
              <p>{t("page-experience.description")}</p>
            </div>
            <div className="timeline">
              <TimeLine />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
