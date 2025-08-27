import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import "./i18n";
import { Custom404 } from "./pages/404";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Experience } from "./pages/experience";
import { Home } from "./pages/home";
import { Project } from "./pages/project";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="*" element={<Custom404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}
