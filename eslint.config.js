import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{astro,js,mjs,cjs,ts}"] },
  { ignores: ["dist/*", ".astro/*", "src/env.d.ts"] },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
];
