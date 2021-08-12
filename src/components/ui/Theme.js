import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#ffd4d4';
const arcOrange = '#000000';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
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
