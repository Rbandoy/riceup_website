
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
   content: [
    './src/**/*.js',
    './public/index.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#FFD700',
        secondary: "#FF4500", 
        primaryText: "#333333",
        neutral: 'white',
        card: '#FBFFF7',
        backgroundPrimary: '#76FC8E',
        buttonColor: '#FF782F',
        borderColor: "#E9E1E1",
        disableBackgroundColor: '#FF4500',
      }
    },
  },
  // ...
}

