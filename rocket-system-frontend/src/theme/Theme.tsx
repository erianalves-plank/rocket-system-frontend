const theme = {
  colors: {
    primary: '#5e548e',
    secondary: '#9f86c0',
    tertiary: '#e0b1cb',
    text: '#191825',
    background: 'linear-gradient(#9f86c0, #e0b1cb)',
    navbarBackground: '#5e548e',
    footerBackground: '#5e60ce',
  },
  typography: {
    fontFamily: "'Ysabeau', sans-serif",
    fontSize: '18px',
    fontWeight: 'bold',
  },
  layout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-evenly',
  },
  navbar: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '20px',
  },
  hero: {
    background: "url('../imgs/space-with-rocket.jpg')",
    textAlign: 'center',
    backgroundSize: 'cover',
    padding: '50px 0 10px 0',
    flexGrow: 1,
  },
  main: {
    backgroundColor: 'linear-gradient(#9f86c0, #e0b1cb)',
    color: '#191825',
    flexGrow: 1,
  },
  image: {
    width: '100px',
    height: 'auto',
  },
  bold: {
    fontWeight: 'bold',
  },
  container: {
    fontSize: '18px',
    background: 'linear-gradient(#9f86c0, #e0b1cb)',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '5px 1px',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  flexItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '10px',
    border: '2px solid #be95c4',
    background: 'linear-gradient(to right, #9f86c0, #e0b1cb, #9f86c0)',
    padding: '0px 5px',
    borderRadius: '4px',
  },
  paragraph: {
    maxWidth: '300px',
    textAlign: 'justify',
  },
  footer: {
    textAlign: 'center' as const,
    backgroundColor: '#5e60ce',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '15px',
  },
  divBtn: {
    marginTop: 'auto',
    justifyContent: 'space-around',
    width: '100%',
  },
}

export default theme

export { theme }
