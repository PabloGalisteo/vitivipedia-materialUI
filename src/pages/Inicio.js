import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// -------- mapas ----------- //
import EspanaMapa from '../mapas/España.svg';
import AndaluciaMapa from '../mapas/Andalucía-a.svg';
import AragonMapa from '../mapas/Aragón.svg';

// -------- botones ----------- //
import Espana from '../components/ui/comunidades/Espana';
import Andalucia from '../components/ui/comunidades/Andalucia';
import Aragon from '../components/ui/comunidades/Aragon';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  },
  width: {
    width: '100%'
  },
  marginBottomButton: {
    marginBottom: '400px'
  }
}));

const Inicio = () => {
  const [showEspana, setShowEspana] = useState(true);
  const [showAndalucia, setShowAndalucia] = useState(false);
  const [showAragon, setShowAragon] = useState(false);
  const classes = useStyles();

  const toggleMapas = mapName => {
    if (mapName === 'Andalucia') {
      setShowEspana(false);
      setShowAndalucia(true);
      setShowAragon(false);
    } else if (mapName === 'Aragon') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(true);
    } else {
      setShowEspana(true);
      setShowAndalucia(false);
      setShowAragon(false);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <div className={classes.sideBar}>
            <Espana
              className={classes.marginBottomButton}
              onClick={() => toggleMapas('Espana')}
            />
            <Andalucia onClick={() => toggleMapas('Andalucia')} />
            <Aragon onClick={() => toggleMapas('Aragon')} />
          </div>
        </Grid>
        <Grid item xs={10}>
          {showEspana && (
            <img className={classes.width} src={EspanaMapa} alt="España"></img>
          )}

          {showAndalucia && (
            <img
              className={classes.width}
              src={AndaluciaMapa}
              alt="Andalucia"
            ></img>
          )}

          {showAragon && (
            <img className={classes.width} src={AragonMapa} alt="Aragon"></img>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Inicio;
