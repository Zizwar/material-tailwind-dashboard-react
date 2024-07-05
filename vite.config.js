import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    historyApiFallback: true,
      proxy: {
        '/api': 'http://localhost:8000'
      }
  },
});