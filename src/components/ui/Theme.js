import { createMuiTheme } from '@material-ui/core/styles';

const mainColor = '#eeeeee';
const secondaryColor = '#000000';

export default createMuiTheme({
  palette: {
    common: {
      main: `${mainColor}`,
      second: `${secondaryColor}`
    },
    primary: {
      main: `${mainColor}`
    },
    secondary: {
      main: `${secondaryColor}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 700
    }
  }
});
