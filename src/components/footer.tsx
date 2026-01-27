import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <hr />
      <footer>
        <Link to="#">{t("footer.d")}</Link>
        <HashLink
          smooth
          to="#header-ancre"
          aria-label={t("footer.scroll-top")}
        >
          <ArrowUp />
        </HashLink>
      </footer>
    </>
  );
}
