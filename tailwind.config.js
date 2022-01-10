module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        something: "something 7s infinite",
      },
      keyframes: {
        something: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: 1,
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            opacity: 0.7,
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@themesberg/flowbite/plugin'),
  ],
}
