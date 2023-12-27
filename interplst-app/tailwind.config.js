/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    colors:{
      'primario': '#D5B263',
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

