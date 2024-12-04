import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        bgPrimary: "rgb(var(--color-bgPrimary) / <alpha-value>)",
        bgSecondary: "rgb(var(--color-bgSecondary) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accent2: "rgb(var(--color-accent2) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        textVibrant: "rgb(var(--color-textVibrant) / <alpha-value>)"
      }
    },
    fontFamily: {
      'sans': ['"DM Sans"', 'sans-serif'],
      'display': ['"Space Grotesk"', 'sans-serif'],
    }
  },

  plugins: []
} satisfies Config;
