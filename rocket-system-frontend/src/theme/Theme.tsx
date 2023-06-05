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
  layoutContentPage: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '20px',
  },
  imgFrontPage: {
    width: '100px',
    height: 'auto',
  },
  hero: {
    background: "url('../imgs/5438849.jpg')",
    textAlign: 'center',
    backgroundSize: 'cover',
    padding: '50px 0 10px 0',
    flexGrow: 1,
  },
  main: {
    backgroundColor: 'linear-gradient(#858ae3, #9163cb)',
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
    background: 'linear-gradient(#858ae3, #9163cb)',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '5px 1px',
    flexWrap: 'wrap',
    textAlign: 'center',
    flex: '1',
  },
  containerContentPage: {
    fontSize: '20px',
    background: 'linear-gradient(#858ae3, #9163cb)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    /* margin: '5px 1px', */
    textAlign: 'start',
  },
  divContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  flexItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '10px',
    border: '2px solid #7161ef',
    background: 'linear-gradient(to right, #7161ef, #957fef, #7161ef)',
    padding: '0px 5px',
    borderRadius: '4px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  },
  flexItemCrew: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    border: '2px solid #613dc1',
    width: '400px',
    margin: '15px auto',
    borderRadius: '4px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(to right, #613dc1, #97dffc, #613dc1)',
    color: '#fff',
  },
  flexItemTitle: {
    marginTop: '2px',
    marginBottom: 0,
    borderBottom: '4px solid #5e60ce',
  },
  flexItemSub_Title: {
    marginTop: 0,
    marginBottom: '2px',
    paddingLeft: '4px',
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
    paddingBotton: '10px',
  },
  btn: {
    fontSize: '16px',
    fontWeight: '600',
    padding: 'auto 10px',
    border: '1px solid #b9faf8',
    borderRadius: '5px',
    background: '#4361ee',
    color: 'white',
    margin: 'auto 15px 10px 15px',
    width: '100px',
  },
  layoutItemContent: {
    paddingLeft: '15px',
  }
};

export default theme;

export { theme };
