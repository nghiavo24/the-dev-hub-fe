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
    keyframes: {
      headShake: {
      '0%': {
        transform: 'translateX(0)',
      },
      '6.5%': {
        transform: 'translateX(-6px) rotateY(-9deg)',
      },

      '18.5%': {
        transform: 'translateX(5px) rotateY(7deg)',
      },

      '31.5%': {
        transform: 'translateX(-3px) rotateY(-5deg)',
      },

      '43.5%': {
        transform: 'translateX(2px) rotateY(3deg)',
      },
      '50%': {
        transform: 'translateX(0)',
      },
    },
  },
    animation: {
      headShake: 'headShake 2s 10'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}