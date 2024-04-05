const plugin = require('tailwindcss/plugin')

// Extending TailwindcCSS to support grids up to 24 columns
exports.extendGrid24 = {
  gridColumn: {
    'span-24': 'span 24 / span 24',
    'span-23': 'span 23 / span 23',
    'span-22': 'span 22 / span 22',
    'span-21': 'span 21 / span 21',
    'span-20': 'span 20 / span 20',
    'span-19': 'span 19 / span 19',
    'span-18': 'span 18 / span 18',
    'span-17': 'span 17 / span 17',
    'span-16': 'span 16 / span 16',
    'span-15': 'span 15 / span 15',
    'span-14': 'span 14 / span 14',
    'span-13': 'span 13 / span 13',
  },
  gridColumnStart: {
    24: '24',
    23: '23',
    22: '22',
    21: '21',
    20: '20',
    19: '19',
    18: '18',
    17: '17',
    16: '16',
    15: '15',
    14: '14',
    13: '13',
  },
  gridColumnEnd: {
    25: '25',
    24: '24',
    23: '23',
    22: '22',
    21: '21',
    20: '20',
    19: '19',
    18: '18',
    17: '17',
    16: '16',
    15: '15',
    14: '14',
  },
  gridTemplateColumns: {
    24: 'repeat(24, minmax(0, 1fr))',
    23: 'repeat(23, minmax(0, 1fr))',
    22: 'repeat(22, minmax(0, 1fr))',
    21: 'repeat(21, minmax(0, 1fr))',
    20: 'repeat(20, minmax(0, 1fr))',
    19: 'repeat(19, minmax(0, 1fr))',
    18: 'repeat(18, minmax(0, 1fr))',
    17: 'repeat(17, minmax(0, 1fr))',
    16: 'repeat(16, minmax(0, 1fr))',
    15: 'repeat(15, minmax(0, 1fr))',
    14: 'repeat(14, minmax(0, 1fr))',
    13: 'repeat(13, minmax(0, 1fr))',
  },
}

// Extending TailwindcCSS with more easings
// found on https://easings.net/
exports.extendEasings = {
  transitionTimingFunction: {
    'in-sine': 'cubic-bezier(0.12, 0, 0.39, 0)',
    'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
    'in-out-sine': 'cubic-bezier(0.37, 0, 0.63, 1)',
    'in-quad': 'cubic-bezier(0.11, 0, 0.5, 0)',
    'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
    'in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
    'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
    'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
    'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
    'in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
    'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
    'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
    'in-quint': 'cubic-bezier(0.64, 0, 0.78, 0)',
    'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
    'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
    'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
    'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
    'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
    'in-circ': 'cubic-bezier(0.55, 0, 1, 0.45)',
    'out-circ': 'cubic-bezier(0, 0.55, 0.45, 1)',
    'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
    'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    // in-elastic, out-elastic, in-out-elastic, in-bounce, out-bounce, in-out-bounce cannot be implemented as cubic-bezier functions
  },
}

// Adding a plugin to override the default disabled: variant
// extending it to not only include &:disabled as a state but also &[disabled] as an attribute
exports.pluginOverrideDisabled = plugin(function ({ addVariant }) {
  addVariant('disabled', ['&:disabled', '&[disabled]'])
})

// Adding a plugin to create nth-* modifiers
exports.pluginNth = plugin(function ({ matchVariant }) {
  matchVariant(
    'nth',
    (value) => {
      return `&:nth-child(${value})`
    },
    {
      values: {
        even: '2n',
        odd: '2n+1',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
      },
    }
  )
})

// Adding a plugin to create animate-delay-* and animation-delay-* modifiers
exports.pluginAnimateDelay = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'animation-delay': (value) => ({
        'animation-delay': `${value}`,
      }),
      'animate-delay': (value) => ({
        'animation-delay': `${value}`,
      }),
    },
    {
      values: theme('animate', {
        0: '0ms',
        25: '25ms',
        50: '50ms',
        75: '75ms',
        100: '100ms',
        125: '125ms',
        150: '150ms',
        175: '175ms',
        200: '200ms',
        225: '225ms',
        250: '250ms',
        275: '275ms',
        300: '300ms',
        325: '325ms',
        350: '350ms',
        375: '375ms',
        400: '400ms',
        425: '425ms',
        450: '450ms',
        475: '475ms',
        500: '500ms',
        525: '525ms',
        550: '550ms',
        575: '575ms',
        600: '600ms',
        625: '625ms',
        650: '650ms',
        675: '675ms',
        700: '700ms',
        725: '725ms',
        750: '750ms',
        775: '775ms',
        800: '800ms',
        825: '825ms',
        850: '850ms',
        875: '875ms',
        900: '900ms',
        925: '925ms',
        950: '950ms',
        975: '975ms',
        1000: '1000ms',
        1250: '1250ms',
        1500: '1500ms',
        1750: '1750ms',
        2000: '2000ms',
        2250: '2250ms',
        2500: '2500ms',
        2750: '2750ms',
        3000: '3000ms',
      }),
    }
  )
})

// Adding a plugin to create is-* modifiers for the :is() pseudo-class
exports.pluginIs = plugin(function ({ matchVariant }) {
  matchVariant('is', (value) => {
    return `&:is(${value})`
  })
  matchVariant('group-is', (value) => {
    return `:merge(.group):is(${value}) &`
  })
  matchVariant('peer-is', (value) => {
    return `:merge(.peer):is(${value}) ~ &`
  })
})

// :not() pseudo-class
exports.pluginNot = plugin(function ({ matchVariant }) {
  matchVariant('not', (value) => {
    return `&:not(${value})`
  })
  matchVariant('group-not', (value) => {
    return `:merge(.group):not(${value}) &`
  })
  matchVariant('peer-not', (value) => {
    return `:merge(.peer):not(${value}) ~ &`
  })
})
