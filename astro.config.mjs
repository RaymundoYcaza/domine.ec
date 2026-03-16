import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite"; // ← paquete correcto
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import path from "path";

export default defineConfig({
  site: "https://domine.ec",
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
