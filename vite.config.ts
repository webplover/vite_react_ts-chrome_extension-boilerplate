import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": "/src",
      "@assets": "/src/assets",
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: ".",
        },
        {
          src: ["src/assets/img/icon.png"],
          dest: "assets",
        },
      ],
    }),
  ],
  base: "",
  build: {
    rollupOptions: {
      input: {
        popup: "./popup.html",
        background: "./src/background/index.ts",
      },
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
