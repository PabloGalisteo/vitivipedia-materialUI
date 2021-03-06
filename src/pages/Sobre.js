import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

// -------- pictures ---------- /
import Espana from '../mapas/Espana.svg'; // change to static image
import sketch from '../assets/sketch.jpg';
import castilla from '../mapas/Castilla-la-Mancha.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    fontFamily: 'Lora',
    paddingBottom: '11em'
  },
  marginPage: {
    width: '640px',
    [theme.breakpoints.up('md')]: {
      margin: '0px 64px'
    },
    [theme.breakpoints.down('md')]: {
      margin: '0px 48px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0px 24px'
    }
  },
  titleStyle: {
    fontFamily: 'Raleway',
    fontWeight: 400,
    fontSize: '2.8em'
  },
  subtitle: {
    fontWeight: 300,
    color: '#888'
  },
  articleInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  authorContainer: {
    display: 'flex'
  },
  authorStyle: {
    marginLeft: '10px',
    fontSize: '0.9em',
    color: '#888'
  },
  iconButton: {
    color: 'white',
    background: '#333',
    padding: '0.3em',
    marginLeft: '0.5em',

    '&:hover': {
      background: '#000000'
    }
  },
  mainImgStyle: {
    width: '100%',
    height: 'auto'
  },
  imgContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3em'
  },
  paragraphStyleContainer: {
    [theme.breakpoints.up('md')]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    }
  },
  paragraphStyle: {
    [theme.breakpoints.up('md')]: {
      lineHeight: '32px'
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '28px'
    }
  },
  responsiveImgs: {
    [theme.breakpoints.up('md')]: {
      width: '60%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      topMargin: '1em'
    }
  },
  responsiveImgBottle: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '25%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '35%',
      topMargin: '1em'
    }
  },
  responsiveImglong: {
    [theme.breakpoints.up('md')]: {
      width: '40%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      topMargin: '1em'
    }
  }
}));

const Sobre = () => {
  const classes = useStyles();

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#EEEEEE';
    };
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Bienvenido a Vitivipedia</h1>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Hola, me llamo Pablo y he creado Vitivipedia partiendo de una idea
            que tuve hace a??os. Mi pasi??n por el vino me llevo a estudiar un
            curso como sommelier en Estocolmo, donde resido, adem??s de realizar
            el WSET 3.<br></br>
            <br></br>
            Adem??s de algunos
            <b> art??culos informativos sobre vino</b> que encontrar??s en el{' '}
            <Link to="/blog">blog</Link>, he creado en la p??gina de{' '}
            <Link to="/">Inicio</Link> unos mapas interactivos clasificados por
            comunidades aut??nomas.<br></br>
            <br></br>En ellas encontrar??s los vinos m??s representitavos de cada
            zona. Los vinos son escogidos por su
            <b> importancia hist??rica, calidad o reconocimiento. </b>
            Son vinos que merecen ser la pena probados o como m??nimo conocer de
            su existencia.<br></br>
            <br></br>Algunos de estos vinos pueden ser extremadamente caros,
            otros no. Lo importante es que son vinos que no pueden pasar
            desapercibidos.
            <br></br>
            <br></br>
            Al entrar a la p??gina de <Link to="/">Inicio</Link>, podr??s
            seleccionar la comunidad aut??noma deseada, para as?? descubrir esos
            vinos ??nicos en forma tarjetas.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Espana} alt="mapa Espa??a"></img>
      </Grid>
      <Grid item className={classes.marginPage}>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Al hacer click en cualquiera de las comunidades, ver??s diferentes
            fronteras dibujadas.<br></br>
            <br></br>Si la linea es continua y el fondo de otro color, significa
            que en esa zona existe una{' '}
            <b>
              Denominaci??n de Origen (D.O) o Denominaci??n de Origen Calificada
              (D.O.C).
            </b>
            <br></br>
            <br></br> En el caso de las lineas discontinuas, se trata de una{' '}
            <b>
              Indicaci??n Geogr??fica (I.G.P) tambi??n conocido como Vino de la
              Tierra (V.T).
            </b>{' '}
            Aqu?? puedes observar el ejemplo de Castilla la Mancha.
          </p>
        </div>
      </Grid>
      <Grid container justify="center">
        <img
          className={classes.responsiveImgs}
          src={castilla}
          alt="mapa castilla la mancha"
        ></img>
      </Grid>
      <Grid item className={classes.marginPage}>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Al observar las tarjetas, ver??s que existen 2 iconos.{' '}
            <b>
              Si pulsas el coraz??n en una de esas tarjetas, podr??s guardar tus
              vinos favoritos para la pr??xima vez que entres.
            </b>
            <br></br>
            <br></br> En el lado derecho, en la parte de abajo, existe una
            flecha apuntando hac??a abajo. Si presionas en ella, podr??s expandir
            la informaci??n del vino y aprender m??s sobre ??l.
          </p>
        </div>
      </Grid>
      <Grid container justify="center">
        <img
          className={classes.responsiveImglong}
          src={sketch}
          alt="vino sketch"
        ></img>
      </Grid>
      <Grid item className={classes.marginPage}>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Si crees que hay alg??n vino que deber??a estar en esta lista, o
            cualquier otra consulta o reclamaci??n que tengas, h??zmelo saber
            poni??ndote en <Link to="/contacto">contacto</Link> conmigo
            rellenando el formulario.<br></br>
            <br></br>
            Espero que disfrutes del contenido publicado en Vitivipedia, adem??s
            de descubrir vinos que marquen huella en tu vida. ??Gracias!
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Sobre;
