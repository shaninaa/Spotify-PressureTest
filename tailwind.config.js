/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['homepage.html'],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'dark-grey': '#191919',
        'mid-grey': '#323232',
        'grey': '#4c4c4c',
        'mid-light-grey': '#666666',
        'light-grey': '#7f7f7f',
        'white': '#ffffff',
        'blue-dark':'#000033',
        'blue-light':'#ccccff',
      },
      fontFamily: {
        proxima : ['proxima-nova'],
        quicksand : ['quicksand'],
        nunito : ['Nunito']
    },
    },
  },
  plugins: [],
}
