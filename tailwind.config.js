module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '100': '35rem'
      },
      colors: {
        'primary': 'rgb(255,79,79);',
        'primary-0': '#FF4F4F',
        'primary-100': '#DC3131',
        'secondary': '#ecc94b',
      },
    },
    container: {
      center: true,
    },
 
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
};
