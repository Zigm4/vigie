import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// Base relative ("./") => fonctionne sur GitHub Pages (projet ou user pages)
// sans connaître le nom du dépôt. Le routage est en hash (#/...) donc les
// liens profonds restent valides quel que soit l'hébergement statique.
export default defineConfig({
  base: "./",
  build: {
    target: "es2022",
    outDir: "dist",
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Vigie, révision cadre cyber FR",
        short_name: "Vigie",
        description:
          "Compagnon de révision sur le cadre réglementaire cyber français (Diffusion Restreinte / II901, LPM, NIS2). Contenu pédagogique non officiel.",
        theme_color: "#0c0d10",
        background_color: "#0c0d10",
        display: "standalone",
        orientation: "portrait",
        lang: "fr",
        icons: [
          { src: "favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
          {
            src: "icon-maskable.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2,json}"],
        navigateFallback: "index.html",
      },
    }),
  ],
});
