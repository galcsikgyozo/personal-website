/** @type {import('next').NextConfig} */

import styleConfig from './style.config.js'

const scssAdditionalData =
  `
  $screenSizes: (` +
  Object.keys(styleConfig.screenSizes)
    .map((key) => {
      return `${key}: ${styleConfig.screenSizes[key]}`
    })
    .join(', ') +
  `);
  $breakpoints: (` +
  Object.keys(styleConfig.breakpoints)
    .map((key) => {
      return `${key}: ${styleConfig.breakpoints[key]}`
    })
    .join(', ') +
  `);
  $colors: (` +
  Object.keys(styleConfig.themeColors)
    .map((key) => {
      return `${key}: ${styleConfig.themeColors[key]}`
    })
    .join(', ') +
  `);
  $fonts: (` +
  Object.keys(styleConfig.fontFamilies)
    .map((key) => {
      return `'${key}': '${styleConfig.fontFamilies[key]}'`
    })
    .join(', ') +
  `);

  @import 'src/app/scss/mixins/_mq';
  @import 'src/app/scss/mixins/_vw';
`

const nextConfig = {
  sassOptions: {
    additionalData: scssAdditionalData,
  },
  images: {
    // loader: 'custom',
    // loaderFile: './src/app/utils/image-loader.ts',
  },
}

export default nextConfig
