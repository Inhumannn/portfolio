import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

const isGithubPages = process.env.DEPLOY_ENV === "github";

const dynamicRoutes = [
  // Routes statiques (FR/EN)
  "/",
  "/about",
  "/a-propos",
  "/experience",
  "/projects",
  "/projets",
  "/contacts",
  // Routes dynamiques Projets (EN)
  "/project/projet-accueil",
  "/project/projet-react",
  "/project/projet-fullstack",
  // Routes dynamiques Projets (FR)
  "/projet/projet-accueil",
  "/projet/projet-react",
  "/projet/projet-fullstack",
];

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? "/portfolioo/" : "/",
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://thmsfolio.vercel.app",
      dynamicRoutes,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
