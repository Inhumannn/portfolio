import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Experience } from "./pages/experience";
import { Home } from "./pages/home";
import { NotFound } from "./pages/404";
import { Project } from "./pages/project";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}
