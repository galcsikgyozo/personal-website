module.exports = {
  // Breakpoints
  breakpoints: {
    sm: 0,
    md: 640,
    lg: 1025,
  },

  // Relative screen sizes for vw units
  // Note: They need to have the same names as the breakpoints
  screenSizes: {
    sm: 390,
    md: 1024,
    lg: 1440,
  },

  // Colors
  themeColors: {
    background: '#17191D',
    backgroundAlt: '#22252A',
    primary: '#F1F3F9',
    body: '#A1A3A8',
  },

  // Typography
  fontFamilies: {
    system: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ],
    mono: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
    inter: ['var(--font-inter)'],
  },
}
