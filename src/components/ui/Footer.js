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
    flex: 1
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
      width: '1.5em',
      marginLeft: '3.5em'
    }
  },
  socialContainer: {
    marginTop: '-2.5em'
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={5} md={6} sm={3}>
          <img
            className={classes.logo}
            src={logoViti}
            alt="logo-vitivipedia"
          ></img>
        </Grid>
        <Grid item xs={7} md={6} sm={9}>
          <Grid container>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(0)}
              to="/"
              xs={2}
            >
              Inicio
            </Grid>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(1)}
              to="/blog"
              xs={2}
            >
              Blog
            </Grid>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/sobre"
              xs={2}
            >
              Sobre
            </Grid>
            <Grid
              className={`${classes.link} ${classes.mobileFooter}`}
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/contacto"
              xs={2}
            >
              Contacto
            </Grid>
            <Grid
              item
              component={'a'}
              href="https://www.instagram.com/vitivipedia/"
              rel="noopener noreferrer"
              target="_blank"
              xs={2}
              className={`${classes.link} ${classes.mobileFooter}`}
            >
              <img
                alt="instagram logo"
                src={instagram}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
