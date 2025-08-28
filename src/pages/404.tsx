import DotGrid from "@/components/dotGrid"; // Assure-toi que ce chemin est correct
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Custom404() {
  const { t } = useTranslation();

  return (
    <main id="notfound">
      {/* Conteneur principal avec position relative */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Arrière-plan animé */}
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

        {/* Contenu 404 */}
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
  );
}
