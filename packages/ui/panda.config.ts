import { defineConfig } from "@pandacss/dev";
import { tokens } from "./src/theme";
import { semanticTokens } from "./src/theme/semanticTokens";
import { textStyles } from "./src/theme/textStyles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },

  outExtension: "js",
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
