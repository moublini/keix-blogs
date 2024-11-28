import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2B2D42',
        'secondary': '#8D99AE',
        'tertiary': '#C0CBDD',
        'neutral': '#EDF2F4',
        'call-to-action': '#EF233C',
        'success': '#5FF83C',
        'warning': '#F8A33C',
        'danger': '#D60B24',
      },
      fontFamily: {
        display: [
          '"Titillium Web"',
        ],
        sans: [
          '"Roboto"',
          '"Inter"',
          "ui-sans-serif",
          "system-ui",  
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
