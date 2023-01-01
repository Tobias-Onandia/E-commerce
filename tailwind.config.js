/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true
    },
    spacing:{
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    extend: {
    },
  },
  plugins: [
    require("daisyui")
  ],
}
