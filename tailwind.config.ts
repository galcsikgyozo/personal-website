import type { Config } from "tailwindcss";

import styleConfig from "./style.config";

import { pluginVw, themeResetPixels } from "./src/tailwindcss/vw";
import { extendGrid24, extendEasings, pluginNth, pluginAnimateDelay, pluginOverrideDisabled } from "./src/tailwindcss/utils";

const config: Config = {
  corePlugins: {
    container: false,
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...themeResetPixels,
    screens: Object.fromEntries(Object.entries(styleConfig.breakpoints).map(([key, value]) => [key, `${value}px`])),
    vwScreens: styleConfig.screenSizes,

    extend: {
      lineHeight: {
        DEFAULT: '1',
      },
      fontFamily: styleConfig.fontFamilies,
      colors: styleConfig.themeColors,
      ...extendGrid24,
      ...extendEasings,
    },
  },
  plugins: [
    pluginNth,
    pluginAnimateDelay,
    pluginOverrideDisabled,
    pluginVw,
  ],
};
export default config;
