/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      'dark-salmon': '#E89475',
      'air-blue': '#7EA0B7',
      'yellow-crayola': '#FFEF9F',
      'paolo-green': '#409D78'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}