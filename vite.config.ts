import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@constants": resolve(root, "constants"),
      "@pages": resolve(root, "pages"),
      "@assets": resolve(root, "assets"),
    },
  },
});
