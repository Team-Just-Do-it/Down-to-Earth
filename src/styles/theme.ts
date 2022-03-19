export const size = {
  smallest: "25em", // 400px
  small: "31.25em", // 500px
  medium: "37.5em", // 600px
  large: "56.25em", // 900px
  largest: "75em", // 1200px
};

const theme = {
  mainColor: "#847258",
  mediaQuery: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
