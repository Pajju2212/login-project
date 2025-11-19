// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use @ to reference src, and 'src' if you prefer
      "@": path.resolve(__dirname, "src"),
      "src": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 5173
  }
});
