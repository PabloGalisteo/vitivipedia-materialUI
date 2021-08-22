import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import instagram from '../../assets/instagram.svg';

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
    textDecoration: 'none',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginTop: '2.5em',
    display: 'flex'
    //here I need to separate links an unable flex-wrap to position on the side of logo
  },
  icon: {
    height: '2em',
    width: '2em',
    [theme.breakpoints.down('xs')]: {
      height: '1em',
      width: '1em'
    },
    [theme.breakpoints.down('md')]: {
      height: '1.5em',
      width: '1.5em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-2.5em',

    right: '0.60em'
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <img
            className={classes.logo}
            src={logoViti}
            alt="logo-vitivipedia"
          ></img>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(0)}
              to="/"
              sm={3}
            >
              Inicio
            </Grid>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(1)}
              to="/blog"
              sm={3}
            >
              Blog
            </Grid>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/sobre"
              sm={3}
            >
              Sobre
            </Grid>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/contacto"
              sm={3}
            >
              Contacto
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" className={classes.socialContainer}>
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com/vitivipedia/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
