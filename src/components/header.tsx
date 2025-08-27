import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/layout/header.scss";

export function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
                <Link to="/about">{t("header.about")}</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to="/experience">{t("header.experience")}</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to="/project">{t("header.projects")}</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <HashLink smooth to="/#contact-ancre">
                  {t("header.contacts")}
                </HashLink>
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
              <Link to="/about">
                <DropdownMenuItem>{t("header.about")}</DropdownMenuItem>
              </Link>
              <Link to="/experience">
                <DropdownMenuItem>{t("header.experience")}</DropdownMenuItem>
              </Link>
              <Link to="/project">
                <DropdownMenuItem>{t("header.projects")}</DropdownMenuItem>
              </Link>
              <HashLink smooth to="/#contact-ancre">
                <DropdownMenuItem>{t("header.contacts")} </DropdownMenuItem>
              </HashLink>{" "}
              <Button
                variant="outline"
                onClick={() =>
                  changeLanguage(i18n.language === "fr" ? "en" : "fr")
                }
                className="px-[36px] py-0 bg-transparent border-none"
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
