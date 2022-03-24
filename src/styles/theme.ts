export const size = {
  smallest: "25em", // 400px
  small: "31.25em", // 500px
  medium: "37.5em", // 600px
  large: "56.25em", // 900px
  largest: "75em", // 1200px
};

const theme = {
  palette: {
    normalFont: "000000",
    lightFont: "#666666",
    lightBackground: "EBEBEB",
    mediumBackground: "E5E5E5",
    highBackground: "#847258",
  },

  fontSizes: {
    smallest: "1.4rem",
    small: "1.8rem",
    medium: "2rem",
    large: "2.4rem",
    largest: "3rem",
  },

  mainColor: "#847258",
  mediaQuery: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
