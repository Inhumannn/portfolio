import DotGrid from "@/components/dotGrid";
import { PageTransition } from "@/components/pageTransition";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Custom404() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <main id="notfound">
        <SEO
          title={t("notfound.title")}
          description={t("notfound.description")}
          noIndex={true}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <DotGrid
              dotSize={10}
              gap={15}
              baseColor="#5227FF"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          <section style={{ position: "relative", zIndex: 1 }}>
            <div className="notfound-container">
              <h1>
                404 <br /> {t("notfound.404")}
              </h1>
              <p>{t("notfound.404p")}</p>
              <Button variant="secondary" asChild>
                <Link to="/">{t("notfound.404b")}</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
