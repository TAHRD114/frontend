/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "1/50": "2%",
        "1/20": "5%",
        "1/10": "10%",
        "1/8": "12.5%",
        "1/6": "16.666667%",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33.333333%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "4/5": "80%",
      },
    },
    colors: {
      "light-yellow": "#feffe8",
      "dark-yellow": "#ecf0a7",
      "nav-blue": "#04434F",
      pink: "#8E7EB9",
    },
  },
  plugins: [],
};
