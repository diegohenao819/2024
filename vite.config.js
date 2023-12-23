import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/2024/",
  build: {
    rollupOptions: {
      input: './App.jsx' // Ensure this is the path to your entry HTML file
    },
    input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  }
});
