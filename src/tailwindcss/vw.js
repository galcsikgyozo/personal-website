const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");

exports.pluginVw = plugin(function ({
  addBase,
  addVariant,
  matchVariant,
  theme,
}) {
  let vwScreens = Object.values(theme("vwScreens"));
  if (vwScreens.length === 0) {
    vwScreens = Object.values(theme("screens"));
  }

  const prefix = theme("prefix") ?? "--tw-";

  addBase({
    ":root": {
      [`${prefix}w-screen`]: "100vw",
      [`${prefix}w-current`]:
        String(vwScreens[0]).replace("px", "") ??
        String(theme("screens")[0]).replace("px", ""),
      // each screen size @media min-width
      ...Object.fromEntries(
        Object.entries(theme("screens")).map(([key, value]) => [
          `@media (min-width: ${value})`,
          {
            [`${prefix}w-current`]:
              String(theme("vwScreens")[key]).replace("px", "") ??
              String(value).replace("px", ""),
          },
        ])
      ),
    },
  });

  addVariant("@@", ({ container }) => {
    let styles = [];

    container.walkRules((rule) => {
      let hasNotNull = false;
      rule.walkDecls((decl) => {
        if (
          decl.value !== 0 &&
          decl.value !== "0" &&
          decl.value !== "0px" &&
          /^-?(\.\d+|\d+(\.\d+)?)(px)?$/.test(decl.value)
        ) {
          styles.push({
            value: decl.value.split("px")[0],
            prop: decl.prop,
          });

          decl.remove();
          hasNotNull = true;
        }
      });

      if (hasNotNull) {
        styles.forEach((style) => {
          rule.prepend(
            postcss.decl({
              prop: style.prop,
              value: `calc((${style.value} / var(${prefix}w-current)) * var(${prefix}w-screen))`,
            })
          );
        });
      }
    });
  });

  matchVariant(
    "@",
    (value = "", { modifier, container }) => {
      let breakpointName = Object.keys(theme("screens")).find(
        (key) => theme("screens")[key] === value
      );
      let screenSize = theme("vwScreens")[breakpointName] ?? value;

      let styles = [];

      container.walkRules((rule) => {
        rule.walkDecls((decl) => {
          // remove ${prefix}w-relative
          if (decl.prop === `${prefix}w-relative`) {
            decl.remove();
          }
        });

        let hasNotNull = false;
        rule.walkDecls((decl) => {
          if (
            decl.value !== 0 &&
            decl.value !== "0" &&
            decl.value !== "0px" &&
            /^-?(\.\d+|\d+(\.\d+)?)(px)?$/.test(decl.value)
          ) {
            styles.push({
              value: decl.value.split("px")[0],
              prop: decl.prop,
            });

            decl.remove();
            hasNotNull = true;
          }
        });

        if (hasNotNull) {
          styles.forEach((style) => {
            rule.prepend(
              postcss.decl({
                prop: style.prop,
                value: `calc((${style.value} / var(${prefix}w-relative)) * var(${prefix}w-screen))`,
              })
            );
          });

          rule.append(
            postcss.decl({
              prop: `${prefix}w-relative`,
              value: String(screenSize).replace("px", ""),
            })
          );
        }
      });

      if(breakpointName !== undefined && breakpointName !== null) {
        if (
          value !== 0 &&
          value !== "0" &&
          value !== "0px" &&
          /^-?(\.\d+|\d+(\.\d+)?)(px)?$/.test(value)
        ) {
          let parsed = ((numericValue) =>
            numericValue === null ? null : parseFloat(value))(
            value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)?.[1] ?? null
          );
          return parsed !== null ? `@media (min-width: ${value})` : [];
        }
      }
    },
    {
      values: theme("screens"),
    }
  );
});

/**
 * Utility to convert default TailwindCSS theme values to pixels
 * it is necessary to be able to convert px values to vw when using
 * default TailwindCSS classes with the `twPlugin` provided modifiers
 */
exports.themeResetPixels = {
  fontSize: {
    "xs": "12px",
    "sm": "14px",
    "base": "16px",
    "lg": "18px",
    "xl": "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
    "7xl": "72px",
  },
  letterSpacing: {
    tighter: "0.8px",
    tight: "0.4px",
    normal: "0",
    wide: "0.4px",
    wider: "0.8px",
    widest: "1.6px",
  },
  spacing: {
    px: "1px",
    0: "0",
    0.5: "2px",
    1: "4px",
    1.5: "6px",
    2: "8px",
    2.5: "10px",
    3: "12px",
    3.5: "14px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    24: "96px",
    28: "112px",
    32: "128px",
    36: "144px",
    40: "160px",
    44: "176px",
    48: "192px",
    52: "208px",
    56: "224px",
    60: "240px",
    64: "256px",
    72: "288px",
    80: "320px",
    96: "384px",
  },
  borderRadius: {
    "none": "0",
    "sm": "2px",
    "DEFAULT": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "3xl": "24px",
    "full": "9999px",
  },
};