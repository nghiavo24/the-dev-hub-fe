module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-salmon': '#E89475',
        'air-blue': '#7EA0B7',
        'yellow-crayola': '#FFEF9F',
        'paolo-green': '#409D78',
        'blonde': '#F4F0BB',
        'off-white': '#FAF9F6'
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      lobster: ["Lobster", "cursive"],
      montaga: ["Montaga", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}