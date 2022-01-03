const theme = {

  breakpoints: {
    phone: 600,
    tablet: 950,
    laptop: 1300,
  },
  queries: {
    phoneAndSmaller: `(max-width: ${600 / 16}rem)`,
    tabletAndSmaller: `(max-width: ${950 / 16}rem)`,
    laptopAndSmaller: `(max-width: ${1300 / 16}rem)`
  },
  fontSize: {
    18: `${18 / 16}rem`,
    14: `${14/16}rem`
  },
  palette: {
    secondary: '#6868D9',
  }
}

export default theme;