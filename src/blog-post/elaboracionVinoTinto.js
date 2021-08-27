import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// -------- pictures ---------- /
import copaTinto from '../blog-fotos/elaboracionTinto/vino-tinto-botella-copa.jpg';
import baneraMaceracion from '../blog-fotos/elaboracionTinto/banera-maceracin-vino-tinto.jpg';
import cubaFermentacion from '../blog-fotos/elaboracionTinto/cuba-de-fermentacion.jpg';
import cubaVino from '../blog-fotos/elaboracionTinto/cuba-vino.jpg';
import depositoAcero from '../blog-fotos/elaboracionTinto/depositos-acero-inoxidable.jpg';
import despalilladora from '../blog-fotos/elaboracionTinto/despalilladora-uvas.jpg';
import embotelladora from '../blog-fotos/elaboracionTinto/maquina-embotelladora.jpg';
import mezclaBordelesa from '../blog-fotos/elaboracionTinto/mezcla-bordelesa-vino.jpg';
import racimoTintas from '../blog-fotos/elaboracionTinto/racimo-uvas-tintas.jpg';
import tolvaUvasTintas from '../blog-fotos/elaboracionTinto/tolva-uvas-tintas.jpg';

const useStyles = makeStyles(theme => ({
  marginPage: {
    [theme.breakpoints.up('md')]: {
      padding: '0em 8em'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0em 4em'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1em'
    }
  },
  styleContainer: {
    color: '#ffff'
    // padding: '0em 9em'
  },
  paragraphStyle: {
    fontSize: '1.5em',
    backgroundColor: '#545454',
    color: '#ffff',
    marginBottom: '2em'
  },
  getMargin: {
    //marginBottom: '2em'
  },
  imgStyling: {
    marginBottom: '2em'
  }
}));

const ElaboracionVinoTinto = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.marginPage}>
      <Grid container className={classes.styleContainer}>
        <Grid item xs={12} className={classes.getMargin}>
          <Typography className={classes.paragraphStyle}>
            La elaboración del vino tinto no es sencilla. Sin embargo, todo
            proceso tiene un sistema y aquí te explico de forma sencilla y con
            dibujos como se elabora el vino tinto. Esta explicación es una
            aproximación ya que hay multitud de factores que intervienen en la
            elaboración, aún así y como norma general estos pasos son comunes en
            muchos casos.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} className={classes.imgStyling}>
              <div>
                <img src={racimoTintas} alt="copa vino tinto"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Typography className={classes.paragraphStyle}>
                Uvas tintas son recolectadas durante la vendimia, ya sea a mano
                o con maquina. La vendimia a veces se hace durante la noche para
                evitar altas temperaturas.​
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8}>
              <Typography className={classes.paragraphStyle}>
                Los racimos de uvas son llevados hasta las tolvas, donde se
                reciben.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div>
                <img src={baneraMaceracion} alt="copa vino tinto"></img>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ElaboracionVinoTinto;
