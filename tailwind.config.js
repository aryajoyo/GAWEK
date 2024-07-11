/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./idex.html"],
  theme: {
    screens: {
      xs: '240px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        neon:'#16FF00'
      }
    },
  },
  plugins: [],
}

