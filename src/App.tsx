import { Analytics } from "@/components/analytics";
import { slugify } from "@/utils/slugify";
import { AnimatePresence } from "framer-motion";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/themProvider";
import "./i18n";
import { Custom404 } from "./pages/404";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Experience } from "./pages/experience";
import { Home } from "./pages/home";
import { ProjectDetails } from "./pages/projectDetails";
import { Projects } from "./pages/projects";

export function App() {
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";
  const { i18n } = useTranslation();
  const languages = ["en", "fr"];
  const location = useLocation();

  const getSlug = (lang: string, key: string) => {
    const resource = i18n.getResourceBundle(lang, "translation");
    return resource?.app?.[key] ? slugify(resource.app[key]) : "";
  };

  const getPageKey = (pathname: string) => {
    if (pathname === "/" || pathname === "/en") return "home";
    if (pathname === "/404") return "404";

    const keys = ["about", "experience", "projects", "contacts", "project"];

    for (const key of keys) {
      for (const lang of languages) {
        const slug = getSlug(lang, key);
        if (pathname.includes(`/${slug}`)) {
          if (key === "project") {
            return pathname;
          }
          return key;
        }
      }
    }
    return pathname;
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster position="bottom-right" />
        <Analytics />
        <AnimatePresence mode="wait">
          <Routes location={location} key={getPageKey(location.pathname)}>
            <Route path="/" element={<Home />} />

            {languages.map((lang) => (
              <>
                <Route
                  path={`/${getSlug(lang, "about")}`}
                  element={<About />}
                  key={`${lang}-about`}
                />
                <Route
                  path={`/${getSlug(lang, "experience")}`}
                  element={<Experience />}
                  key={`${lang}-exp`}
                />
                <Route
                  path={`/${getSlug(lang, "projects")}`}
                  element={<Projects />}
                  key={`${lang}-proj`}
                />
                <Route
                  path={`/${getSlug(lang, "contacts")}`}
                  element={<Contact />}
                  key={`${lang}-contact`}
                />
                <Route
                  path={`/${getSlug(lang, "project")}/:id`}
                  element={<ProjectDetails />}
                  key={`${lang}-details`}
                />
              </>
            ))}
            <Route path="/404" element={<Custom404 />} />
            <Route path="*" element={<Custom404 />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
}
