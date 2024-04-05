import type { Config } from 'tailwindcss'

import styleConfig from './style.config'

import { pluginVw, themeResetPixels } from './src/tailwindcss/vw'
import {
  extendGrid24,
  extendEasings,
  pluginIs,
  pluginNot,
  pluginNth,
  pluginAnimateDelay,
  pluginOverrideDisabled,
} from './src/tailwindcss/utils'

const config: Config = {
  corePlugins: {
    container: false,
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    ...themeResetPixels,
    screens: Object.fromEntries(
      Object.entries(styleConfig.breakpoints).map(([key, value]) => [
        key,
        `${value}px`,
      ])
    ),
    vwScreens: Object.fromEntries(
      Object.entries(styleConfig.screenSizes).map(([key, value]) => [
        key,
        `${value}px`,
      ])
    ),

    // Purposefully leaving out the default transition class
    transitionProperty: {
      none: 'none',
      all: 'all',
      colors:
        'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },

    extend: {
      lineHeight: {
        DEFAULT: '1',
      },
      fontFamily: styleConfig.fontFamilies,
      colors: styleConfig.themeColors,
      ...extendGrid24,
      ...extendEasings,
      keyframes: {
        scaleAndFadeOut: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.35',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(10)',
            opacity: '0',
          },
        },
      },
      animation: {
        'scale-and-fade-out': 'scaleAndFadeOut 2s linear infinite',
      },
    },
  },
  plugins: [
    pluginIs,
    pluginNot,
    pluginNth,
    pluginAnimateDelay,
    pluginOverrideDisabled,
    pluginVw,
  ],
}
export default config
