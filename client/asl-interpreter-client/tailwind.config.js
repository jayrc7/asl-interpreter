/** @type {import('tailwindcss').Config} */
export default {
  // purge should only be used in production builds but we'll leave it here 
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

