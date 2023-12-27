/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary': '#D5B263',
      'texto': '#293040',
      'secondary': '#AAB1C3',
      'accent': '#C9AD8B',
      'back': '#FBFCFC',
    },
    extend: {
      fontFamily: {
        'titulo': ['Onest'],
        'parrafo': ['Montserrat']
      },
    },
  },
  plugins: [],
}

