import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/layout/footer.scss";

export function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <hr />
      <footer>
        <Link to="">{t("footer.d")}</Link>
        <HashLink smooth to="#header-ancre">
          <ArrowUp />
        </HashLink>
      </footer>
    </>
  );
}
