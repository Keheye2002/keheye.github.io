import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// CI passes the real GitHub Pages origin and base path (see .github/workflows/deploy.yml).
export default defineConfig({
  site: process.env.SITE_URL || "https://keheye2002.github.io",
  base: process.env.BASE_PATH || "/",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
