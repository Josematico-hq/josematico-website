/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },
      backgroundPosition: {
        '0%': '0',
        '100%': '100%'
      },
      backgroundSize: {
        '400%': '400%'
      },
      transitionProperty: {
        'background-position': 'background-position'
      }
    }
  },
  plugins: []
}
