module.exports = {
  plugins: {
    'postcss-import': {
      path: ["src"],
    },
    'tailwindcss': {},
    'autoprefixer': {},
    'cssnano': {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    },
  }
} 