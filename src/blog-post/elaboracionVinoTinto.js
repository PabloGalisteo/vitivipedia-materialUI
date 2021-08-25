import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Typography';
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
  marginContainer: {
    margin: '3em',
    color: '#ffff'
  },
  paragraphStyle: {
    fontSize: '1.5em',
    backgrounColor: '#545454'
  }
}));

const ElaboracionVinoTinto = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid container className={classes.marginContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paragraphStyle}>
            La elaboración del vino tinto no es sencilla. Sin embargo, todo
            proceso tiene un sistema y aquí te explico de forma sencilla y con
            dibujos como se elabora el vino tinto. Esta explicación es una
            aproximación ya que hay multitud de factores que intervienen en la
            elaboración, aún así y como norma general estos pasos son comunes en
            muchos casos.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <img src={racimoTintas} alt="copa vino tinto"></img>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paragraphStyle}>
            Uvas tintas son recolectadas durante la vendimia, ya sea a mano o
            con maquina. La vendimia a veces se hace durante la noche para
            evitar altas temperaturas.​
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <img src={baneraMaceracion} alt="copa vino tinto"></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ElaboracionVinoTinto;
