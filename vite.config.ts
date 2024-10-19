import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/weather-app/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
      exclude: [
        "node_modules/",
        "postcss.config.cjs",
        "tailwind.config.js",
        "vite.config.ts",
        "eslint.config.js",
        "src/mocks/",
        "dist/",
        "**/*.test.{ts,tsx}",
        "src/**/*.d.ts",
        "**/index.ts",
        "src/main.tsx",
      ],
    },
  },
});
