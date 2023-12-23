import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  entry: "./build/index.html",
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
    host: true,
    open: "/",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve("./index.html"),
      },
    },
    commonjsOptions: {
      include: [".yarn/**"],
    },
  },
  cacheDir: "./.vite",
  define: {
    global: "globalThis",
  },
});
