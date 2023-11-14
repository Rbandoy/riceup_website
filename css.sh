npm install tailwindcss
npx tailwindcss init

rm -rf 'tailwind.config.js'

filename="tailwind.config.js"
 
nano "$filename"

echo "
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
    },
  },
  // ...
}
" >> "$filename"

echo "Text added to $filename"

npm install @headlessui/react @heroicons/react

rm -rf 'src/index.css'

indexcss="src/index.css"
 
nano "$indexcss"

echo "
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
" >> "$indexcss"

echo "index css configured"