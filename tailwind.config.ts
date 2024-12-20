import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        bgDim: "rgb(var(--color-bg-dim) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        fgDim: "rgb(var(--color-fg-dim) / <alpha-value>)",
        fg: "rgb(var(--color-fg) / <alpha-value>)"
      }
    },
    fontFamily: {
      'sans': ['"DM Sans"', 'sans-serif'],
      'display': ['"Space Grotesk"', 'sans-serif'],
    }
  },

  plugins: []
} satisfies Config;
