import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
const pathSrc = path.resolve(__dirname, "./src/styles");

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${pathSrc}/_variables.scss";`,
      },
    },
  },
});
