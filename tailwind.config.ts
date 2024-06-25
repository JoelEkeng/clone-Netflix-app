import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cover-Image": "url('/backgroundImage.jpg')",  
      },
      height: {
        '110': '32rem',
        '128': '38rem',
        '130': '43rem',
        '135': '55rem',
      },
      width: {
        '97':'23rem',
        '98': '34rem',
        '100': '40rem',
        '150': '80rem',
      },
    },
  },
  plugins: [],
};
export default config;
