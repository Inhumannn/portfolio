import { slugify } from "@/utils/slugify";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
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

  const getSlug = (lang: string, key: string) => {
    const resource = i18n.getResourceBundle(lang, "translation");
    return resource?.app?.[key] ? slugify(resource.app[key]) : "";
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster position="bottom-right" />
        <Routes>
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
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
}
