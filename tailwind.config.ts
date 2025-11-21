import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'charcoal': '#1a1a1a',
        'charcoal-light': '#2a2a2a',
        'gold': '#d4af37',
        'gold-light': '#f4d03f',
        'gold-dark': '#b8941f',
        'silver': '#c0c0c0',
        'silver-dark': '#808080',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config


