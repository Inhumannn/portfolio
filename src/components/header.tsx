import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { slugify } from "@/utils/slugify";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = async (targetLng: string) => {
    const currentPath = location.pathname;
    const appTranslations = t("app", { returnObjects: true }) as Record<
      string,
      string
    >;
    let foundKey = "";
    let idParam = "";

    for (const [key, value] of Object.entries(appTranslations)) {
      const slug = slugify(value);
      if (currentPath === `/${slug}`) {
        foundKey = key;
        break;
      }
    }

    if (!foundKey) {
      const detailsSlug = slugify(appTranslations.project);
      if (currentPath.startsWith(`/${detailsSlug}/`)) {
        foundKey = "project";
        idParam = currentPath.replace(`/${detailsSlug}/`, "");
      }
    }

    await i18n.changeLanguage(targetLng);
    if (foundKey) {
      if (foundKey === "project" && idParam) {
        navigate(`/${slugify(i18n.t(`app.${foundKey}`))}/${idParam}`);
      } else {
        navigate(`/${slugify(i18n.t(`app.${foundKey}`))}`);
      }
    } else if (currentPath === "/") {
      navigate("/");
    }
  };

  return (
    <div id="floating-header">
      <header id="header">
        <Link to="/" className="logo">
          thmsfolio
        </Link>
        <nav>
          <ul>
            <li>
              <Button variant="link">
                <Link to={`/${slugify(t("app.about"))}`}>
                  {t("header.about")}
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={`/${slugify(t("app.experience"))}`}>
                  {t("header.experience")}
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={`/${slugify(t("app.projects"))}`}>
                  {t("header.projects")}
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={`/${slugify(t("app.contacts"))}`}>
                  {t("header.contacts")}
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                onClick={() =>
                  changeLanguage(i18n.language === "fr" ? "en" : "fr")
                }
              >
                {i18n.language === "fr" ? "English" : "Français"}
              </Button>
            </li>
          </ul>
        </nav>
        <div id="menu">
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent id="menu-int">
              <HashLink smooth to="/#header-ancre">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </HashLink>
              <Link to={`/${slugify(t("app.about"))}`}>
                <DropdownMenuItem>{t("header.about")}</DropdownMenuItem>
              </Link>
              <Link to={`/${slugify(t("app.experience"))}`}>
                <DropdownMenuItem>{t("header.experience")}</DropdownMenuItem>
              </Link>
              <Link to={`/${slugify(t("app.projects"))}`}>
                <DropdownMenuItem>{t("header.projects")}</DropdownMenuItem>
              </Link>
              <Link to={`/${slugify(t("app.contacts"))}`}>
                <DropdownMenuItem>{t("header.contacts")} </DropdownMenuItem>
              </Link>
              <Button
                variant="outline"
                onClick={() =>
                  changeLanguage(i18n.language === "fr" ? "en" : "fr")
                }
                className="px-[36px] py-0 m-1 bg-transparent border-none"
              >
                {i18n.language === "fr" ? "English" : "Français"}
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <hr />
    </div>
  );
}
