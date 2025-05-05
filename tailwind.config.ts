import {defineConfig} from 'tailwindcss'
import type { Config } from 'tailwindcss'

export default defineConfig(<Config>{
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            orbitron: ['Orbitron', 'sans-serif'],
            playfair: ['Playfair', 'serif'],
          },
    },
  },
  plugins: [],
})
