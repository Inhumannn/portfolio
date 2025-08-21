import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const isGithubPages = process.env.DEPLOY_ENV === "github";

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? "/portfolioo/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
