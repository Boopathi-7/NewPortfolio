/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    colors: {
      customColor: 'hsl(228, 15%, 20%)',
    },
  },

  plugins: [daisyui],
};
