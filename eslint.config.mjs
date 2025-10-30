import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base configuration for all JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: 2021,
      globals: {
        ...globals.node,        // Node globals
        ...globals.browser,     // Browser globals if any
      },
    },
    rules: {
      "no-console": "off",      // allow console logs
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
    },
  },

  // Jest test file configuration
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,        // adds describe, test, expect, etc.
      },
    },
  },

  // Ignore unnecessary directories
  {
    ignores: [
      "node_modules",
      "coverage",
      "eslint.config.mjs",
    ],
  },
]);
