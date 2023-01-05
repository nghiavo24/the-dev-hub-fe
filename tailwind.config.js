module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-salmon': '#D94141',
        'air-blue': '#5096F2',
        'yellow-crayola': '#F2A516',
        'paolo-green': '#41A65A',
        'blonde': '#F4F0BB',
        'off-white': '#FAF9F6',
        'yellow-note':'#FFEF9F',
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