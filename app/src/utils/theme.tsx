export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  variants: {},
  text: {
    h1: {
      color: "red",
      fontSize: 6,
      fontWeight: "bold"
    },
    h2: {
      color: "green",
      fontSize: 5,
      fontWeight: "normal"
    },
    h3: {
      fontSize: 4,
      fontWeight: "bold"
    },
    h4: {
      fontSize: 4,
      fontWeight: "normal"
    },
    h5: {
      fontSize: 3,
      fontWeight: "bold"
    },
    h6: {
      fontSize: 3,
      fontWeight: "normal"
    }
  },
  buttons: {
    primary: {
      color: "white",
      bg: "red"
    },
    outline: {
      color: "primary",
      bg: "blue",
      boxShadow: "inset 0 0 0 2px"
    }
  }
};
