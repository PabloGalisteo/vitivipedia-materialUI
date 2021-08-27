import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// -------- pictures ---------- /
import barrica from '../blog-fotos/elaboracionBlanco/barrica-roble.jpg';
import cuba from '../blog-fotos/elaboracionBlanco/cuba-acero-inox.jpg';
import despalilladora from '../blog-fotos/elaboracionBlanco/despalilladora-uvas.jpg';
import embotelladora from '../blog-fotos/elaboracionBlanco/embotelladora-vino.jpg';
import prensa from '../blog-fotos/elaboracionBlanco/prensa-tradicional.jpg';
import tolva from '../blog-fotos/elaboracionBlanco/tolva-uvas-blancas.jpg';
import uvasBlancas from '../blog-fotos/elaboracionBlanco/uvas-blancas.jpg';
import vinoBlanco from '../blog-fotos/elaboracionBlanco/vino-blanco.jpg';

import Pablo from '../blog-fotos/pablo.png';

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
  blogImages: {
    marginTop: '3em',
    width: '50%'
  }
}));

const ElaboracionVinoBlanco = props => {
  const classes = useStyles();

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#fff';

    return () => {
      document.querySelector('body').style.backgroundColor = '#545454';
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>
          ¿Qué es el vino blanco y cómo se elabora?
        </h1>
        <h2 className={classes.subtitle}>El proceso paso a paso.</h2>
        <div className={classes.articleInfo}>
          <div className={classes.authorContainer}>
            <div className={classes.avatarStyle}>
              <Avatar img src={Pablo} alt="Pablo" />
            </div>
            <div className={classes.authorStyle}>
              <p>Pablo Galisteo</p>
            </div>
          </div>
          <div className={classes.socialContainer}>
            <IconButton classes={{ root: classes.iconButton }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton classes={{ root: classes.iconButton }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton classes={{ root: classes.iconButton }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className={classes.imgContainerStyle}>
          <img className={classes.mainImgStyle} src={prensa} alt="prensa" />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Uvas blancas son seleccionadas y recolectadas durante la vendimia.
            Esto puede hacerse a manualmente o con maquinas recolectoras. En
            ocasiones la vendimia se hace de madrugada, para evitar las altas
            temperaturas del dia que reducirían la calidad final del vino.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={uvasBlancas}
            alt="racimo uvas blancas"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Los racimos de uvas son transportados hasta las tolvas, donde se
            almacenan antes de seguir el proceso.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={tolva}
            alt="tolva acero vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Normalmente las uvas blancas se separan del escobajo con una
            despalilladora. Hay productores que prefieren dejarlos ya que
            facilita el drenaje del mosto a la hora del prensado.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={despalilladora}
            alt="despalilladora"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Las uvas, después de ser estrujadas, se prensan. Las prensas
            neumáticas son las más comunes hoy en dia. Algunos enólogos optan
            por una corta maceración en frío antes de prensar la uva para
            transferir más carácter al vino.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={prensa}
            alt="prensa vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El mosto, libre de hollejos, pasa a las cubas de acero inoxidable,
            donde se iniciará la fermentación. Los azúcares naturales que
            contiene el mosto se convertiran en alcohol gracias a las levaduras.
            Este proceso transcurre en temperaturas que oscilan desde los 12° y
            los 22° y dura entre 2 y 4 semanas.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={cuba}
            alt="cuba acero inoxidable"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez obtenido el vino blanco, algunas bodegas deciden hacer una
            crianza en barricas de roble, esto dependerá de las necesidades de
            la bodega, de la tradición o el estilo final que se le quiera dar al
            vino. Lo más comun es no criar el vino blanco barricas y
            embotellarlo directamente.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={barrica}
            alt="barrica roble"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez el vino está listo para su consumo, se procede a embotellar
            el vino, normalmente en botellas de 75 cl. Aunque existen otros
            tamaños también.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={embotelladora}
            alt="embotelladora"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Disfruta de tu vino blanco a una temperatura aproximada de 12°. Para
            vinos con largas crianzas tómalo a unos 15° y si puede ser, ¡en copa
            borgoñesa!
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={vinoBlanco}
            alt="vino blanco"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Nota final: como en el caso del vino tinto. Esto es una explicación
            general y simplificada de la elaboración del vino blanco. Los
            procesos pueden ser muy variados ajustándose a las necesidades del
            bodeguero/enólogo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElaboracionVinoBlanco;
