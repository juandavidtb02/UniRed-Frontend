/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'custom-blue':'#151F2E',
        'custum-blue-bg':'#0B1622'
      }
    },
  },
  plugins: [],
}