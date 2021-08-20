import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logoViti from '../../assets/logo.svg';
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#414141',
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  logo: {
    width: '10em',
    color: 'white',
    margin: '1em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '8em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '6em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginTop: '2em'
  },
  mobileFooter: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.mobileFooter}>
          <img
            className={classes.logo}
            src={logoViti}
            alt="logo-vitivipedia"
          ></img>
        </Grid>
        <Grid className={`${classes.link} ${classes.mobileFooter}`} item xs={2}>
          Inicio
        </Grid>
        <Grid className={`${classes.link} ${classes.mobileFooter}`} item xs={2}>
          Blog
        </Grid>
        <Grid className={`${classes.link} ${classes.mobileFooter}`} item xs={2}>
          Sobre
        </Grid>
        <Grid className={`${classes.link} ${classes.mobileFooter}`} item xs={2}>
          Contacto
        </Grid>
      </Grid>
    </footer>
  );
}
