import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  width: {
    width: '100%'
  },
  opacity: {
    opacity: 0.4
  },
  marginBottomButton: {
    marginBottom: '9.4em'
  },
  hideButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  navigationToggler: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mapContainer: {
    backgroundColor: '#daf7ff',
    margin: '0.5em'
  },
  comunidadesStyleBtn: {
    backgroundColor: '#EEEEEE',
    margin: '1em',
    '&:hover': {
      backgroundColor: '#f78550'
    }
  },
  mapBorderRadius: {
    borderRadius: '1em',
    overflow: 'scroll'
  },
  mapRoot: {
    flex: 1
  },
  containerButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  arrowBackStyle: {
    backgroundColor: '#EEEEEE',
    '&:hover': {
      backgroundColor: '#EEEEEE'
    },
    height: '2.6em',
    marginTop: '0.5em',
    marginRight: '0.5em'
  },
  favBtn: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0.5em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2em',
      marginLeft: '7.8em'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em',
      marginLeft: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      marginRight: '0.5em'
    }
  },
  favBtnStyle: {
    color: '#000',
    backgroundColor: '#BFBFBF',
    '&:visited, &:focus, &:active': {
      backgroundColor: '#BFBFBF'
    }
  },
  notShowArrowBiggerScreens: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  bestWinesSentenceStyle: {
    color: '#000',
    backgroundColor: '#BFBFBF',
    '&:visited, &:focus, &:active': {
      backgroundColor: '#BFBFBF'
    },
    borderRadius: '0.3em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2em',
      marginLeft: '7.8em'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em',
      marginLeft: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      marginRight: '0.5em'
    }
  },
  bestWineContainer: {
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      top: '-6em'
    },
    [theme.breakpoints.up('md')]: {
      top: '-6em'
    }
  },
  mapHeight: {
    minHeight: '300px',
    '@media(min-width: 500px)': {
      minHeight: '580px'
    }
  }
}));

export default styles;
