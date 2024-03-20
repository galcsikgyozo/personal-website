module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/app/**/*.{ts,tsx}'],
      safelist: ['img', /(.*)\!(.*)$/, /(.*)\:(.*)$/, /(.*)\[(.*)\](.*)$/],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    cssnano: {},
  },
}
