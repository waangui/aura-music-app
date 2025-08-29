export default {

    content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {

        extend: {

            fontFamily: {
              'libre': ['"Libre Franklin"', 'sans-serif'],
              'baskerville': ['"Libre Baskerville"', 'serif'],
            },

            colors: {
              'custom-purple': '#BFACC8',
              'custom-light': '#F5F2F6',
              'sidebar-bg' : '#F5F1F7'
            },
          },
        },

        plugins: [],
      }
    