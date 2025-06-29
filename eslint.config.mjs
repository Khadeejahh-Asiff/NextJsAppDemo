import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 🔁 Convert legacy config to flat
  ...compat.extends(
    "next/core-web-vitals",
    "next",
    "next/typescript",
    "plugin:prettier/recommended",
  ),

  // 🔧 Add custom rules if needed
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
];

export default eslintConfig;
