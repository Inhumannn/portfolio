import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/pages/404.scss";

export function Custom404() {
  const { t } = useTranslation();
  return (
    <main id="notfound">
      <section>
        <div className="notfound-container">
          <h1>
            404 <br /> {t("notfound.404")}
          </h1>
          <p>{t("notfound.404p")}</p>
          <Button variant="secondary">
            <Link to="/">{t("notfound.404b")}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
