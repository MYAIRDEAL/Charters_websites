/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: '#D1AF77',
        selectType: '#1A1A1A',
        lable: '#D4B183',
        error: '#d4c583',
      },
      screens: {
        '344': '344px', // Custom breakpoint for min-width: 412px
        '375': '375px', // Custom breakpoint for min-width: 412px
        '500': '500px', // Custom breakpoint for min-width: 500px
        '380': '380px', // Custom breakpoint for min-width: 500px
        '360': '360px', // Custom breakpoint for min-width: 500px
        '400': '400px', // Custom breakpoint for min-width: 500px
        '768': '768px', // Custom breakpoint for min-width: 500px
        '800': '800px', // Custom breakpoint for min-width: 500px
        '1024': '1024px', // Custom breakpoint for min-width: 500px
        '700': '700px', // Custom breakpoint for min-width: 500px
        '900': '900px', // Custom breakpoint for min-width: 500px
        '1487': '1487px', // Custom breakpoint for min-width: 500px
        '540': '540px', // Custom breakpoint for min-width: 500px
        '650': '650px', // Custom breakpoint for min-width: 500px
      },
    },
  },
  plugins: [],
}