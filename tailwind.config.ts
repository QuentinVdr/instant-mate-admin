import {nextui} from '@nextui-org/theme';
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d97706",
          secondary: "#84cc16",
          accent: "#fde68a",
          neutral: "#040404",
          "base-100": "#1c1917",
          info: "#3b82f6",
          success: "#84cc16",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
    ],
  },
  darkMode: "class",
  plugins: [daisyui,nextui()],
} satisfies Config;
