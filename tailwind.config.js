module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green':'#5FBC21',
        'primary-dark-green':'#4C9717',
        primary: {
          blue: "#34495E",
          grey: "#212121",
          normal: "hsl(233, 13%, 49%)",
          dark: "hsl(232, 13%, 33%)",
          white: "#FFFFFF"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
