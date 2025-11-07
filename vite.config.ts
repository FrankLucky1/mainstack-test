/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { configDefaults } from "vitest/config"; 

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
});
