module.exports = {
  content: [
      './views/**/*.html'
  ],
  theme: {
      extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('daisyui'),
  ],
  daisyui: {
      themes: ['fantasy'], 
  },
};
