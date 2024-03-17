const plugin = require('tailwindcss/plugin')
const postcss = require('postcss')

exports.pluginVw = plugin(function ({
  addBase,
  addVariant,
  matchVariant,
  theme,
}) {
  /**
   * Setting up variables for the vw plugin
   */

  // Getting the screens from the theme
  const screens = theme('screens')
  const screenValues = Object.values(screens)

  // Getting the vwScreens from the theme (fallback to "screens" if not provided)
  const vwScreens = theme('vwScreens') ?? screens
  const vwScreenValues = Object.values(vwScreens) ?? screenValues

  // Defining the prefix for the CSS variables
  const prefix = '--tw-'

  /**
   * Adding the base CSS variables to the :root for the screen sizes
   * - `screen-relative` is the value of the our viewport's full width - The reason why it's a variable is to be able to overwrite with CSS. For example setting it to a maximum fixed value with @media queries when the viewport reaches a certain width.
   * - `screen-current` is the value of our current relating screen size, generated from the "screens" and "vwScreens" values defined in the Tailwind config.
   */

  addBase({
    ':root': {
      [`${prefix}screen-relative`]: '100vw',
      [`${prefix}screen-current`]:
        String(vwScreenValues[0]).replace('px', '') ??
        String(theme('screens')[0]).replace('px', ''),
      // each screen size @media min-width
      ...Object.fromEntries(
        Object.entries(theme('screens')).map(([key, value]) => [
          `@media (min-width: ${value})`,
          {
            [`${prefix}screen-current`]:
              String(vwScreens[key]).replace('px', '') ??
              String(value).replace('px', ''),
          },
        ])
      ),
    },
  })

  /**
   * Registering the `@@` static variant to convert "px" values to relative values defined by the `screen-relative` and `screen-current` CSS variables
   */

  addVariant('@@', ({ container }) => {
    let styles = []

    container.walkRules((rule) => {
      let hasNotNull = false
      rule.walkDecls((decl) => {
        if (
          decl.value !== 0 &&
          decl.value !== '0' &&
          decl.value !== '0px' &&
          /^-?(\.\d+|\d+(\.\d+)?)(px)?$/.test(decl.value)
        ) {
          styles.push({
            value: decl.value.split('px')[0],
            important: decl.important,
            prop: decl.prop,
          })

          decl.remove()
          hasNotNull = true
        }
      })

      if (hasNotNull) {
        styles.forEach((style) => {
          rule.prepend(
            postcss.decl({
              prop: style.prop,
              value: `calc((${style.value} / var(${prefix}screen-current)) * var(${prefix}screen-relative))${
                style.important ? ' !important' : ''
              }`,
            })
          )
        })
      }
    })
  })

  /**
   * Registering the `@` dynamic variant that accepts a breakpoint name (or arbitrary values) to convert "px" values to relative values defined by the modifier and it's corresponding "vwScreens" value
   * - for example: `@:text-[16px]` will result in `font-size: calc((16 / DEFAULT_SCREEN_SIZE) * FULL_VIEWPORT_WIDTH);`
   *                `@lg:text-[16px]` will result in `@media (min-width: LG_SCREEN_SIZE) { font-size: calc((16 / LG_SCREEN_SIZE) * FULL_VIEWPORT_WIDTH); }`
   */

  matchVariant(
    '@',
    (value = '', { modifier, container }) => {
      let breakpointName = Object.keys(theme('screens')).find(
        (key) => theme('screens')[key] === value
      )
      let screenSize = vwScreens[breakpointName] ?? value
      if (breakpointName == 'DEFAULT') {
        breakpointName = 'default'
      }

      if (modifier !== undefined && modifier !== null && modifier.length > 0) {
        screenSize = modifier
          .replace('px', '')
          .replace('[', '')
          .replace(']', '')
      }

      let styles = []

      container.walkRules((rule) => {
        rule.walkDecls((decl) => {
          // remove ${prefix}w-relative
          if (decl.prop === `${prefix}screen-${breakpointName}`) {
            decl.remove()
          }
        })

        let hasNotNull = false
        rule.walkDecls((decl) => {
          if (
            decl.value !== 0 &&
            decl.value !== '0' &&
            decl.value !== '0px' &&
            /^-?(\.\d+|\d+(\.\d+)?)(px)?$/.test(decl.value)
          ) {
            styles.push({
              value: decl.value.split('px')[0],
              important: decl.important,
              prop: decl.prop,
            })

            decl.remove()
            hasNotNull = true
          }
        })

        if (hasNotNull) {
          styles.forEach((style) => {
            rule.prepend(
              postcss.decl({
                prop: style.prop,
                value: `calc((${style.value} / var(${prefix}screen-size-${
                  breakpointName ??
                  'arbitrary-' + String(screenSize).replace('px', '')
                })) * var(${prefix}screen-relative))${
                  style.important ? ' !important' : ''
                }`,
              })
            )
          })

          rule.append(
            postcss.decl({
              prop: `${prefix}screen-size-${
                breakpointName ??
                'arbitrary-' + String(screenSize).replace('px', '')
              }`,
              value: String(screenSize).replace('px', ''),
            })
          )
        }
      })

      // Only add a `@media (min-width: SCREEN_SIZE)` query
      // - if the breakpoint name is not "default" and there is no arbitrary modifier
      if (breakpointName !== 'default' && modifier !== undefined) {
        // - if the screen size is larger than 0
        if (
          value !== 0 &&
          value !== '0' &&
          value !== '0px' &&
          /^-?(\.\d+|\d+(\.\d+)?)(px)?$/.test(value)
        ) {
          let parsed = ((numericValue) =>
            numericValue === null ? null : parseFloat(value))(
            value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)?.[1] ?? null
          )
          return parsed !== null ? `@media (min-width: ${value})` : []
        }
      }
      // otherwise don't return anything, so the `@media` query is not added
    },
    {
      values: theme('screens'),
    }
  )
})

/**
 * Utility to convert default TailwindCSS theme values to pixels
 * - Description:   Its usage is necessary to be able to convert base TailwindCSS values defined in "em" or "rem" to "px" values so that they can be used with the `@@` and `@` variants
 * - Usage:         1. First you need to `@import { themeResetPixels } from "tailwind-vw"` in your `tailwind.config.js` file
 *                  2. Then add the `...themeResetPixels` with the spread syntax to be the first item the `theme` object
 */

exports.themeResetPixels = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
  },
  letterSpacing: {
    tighter: '0.8px',
    tight: '0.4px',
    normal: '0',
    wide: '0.4px',
    wider: '0.8px',
    widest: '1.6px',
  },
  spacing: {
    px: '1px',
    0: '0',
    0.5: '2px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    3.5: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    36: '144px',
    40: '160px',
    44: '176px',
    48: '192px',
    52: '208px',
    56: '224px',
    60: '240px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
  },
  borderRadius: {
    none: '0',
    sm: '2px',
    DEFAULT: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  lineHeight: {
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
}
