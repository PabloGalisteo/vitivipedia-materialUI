import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// -------- botones ----------- //
import Espana from './botonesCCAA/Espana';
import Andalucia from './botonesCCAA/Andalucia';
import Aragon from './botonesCCAA/Aragon';
import Asturias from './botonesCCAA/Asturias';
import Cantabria from './botonesCCAA/Cantabria';
import CastillaLaMancha from './botonesCCAA/CastillaLaMancha';
import CastillaLeon from './botonesCCAA/CastillaLeon';
import Cataluna from './botonesCCAA/Cataluna';
import Extremadura from './botonesCCAA/Extremadura';
import Galicia from './botonesCCAA/Galicia';
import IslasBaleares from './botonesCCAA/IslasBaleares';
import IslasCanarias from './botonesCCAA/IslasCanarias';
import Madrid from './botonesCCAA/Madrid';
import Murcia from './botonesCCAA/Murcia';
import Navarra from './botonesCCAA/Navarra';
import PaisVasco from './botonesCCAA/PaisVasco';
import Rioja from './botonesCCAA/Rioja';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  },
  marginBottomButton: {
    marginBottom: '0.66em'
  }
}));

const SideCcaaNavigation = ({ toggleMapas }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <Espana
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Espana')}
      />
      <Andalucia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Andalucia')}
      />
      <Aragon
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Aragon')}
      />
      <Asturias
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Asturias')}
      />
      <Cantabria
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Cantabria')}
      />
      <CastillaLaMancha
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('CastillaLaMancha')}
      />
      <CastillaLeon
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('CastillaLeon')}
      />
      <Cataluna
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Cataluna')}
      />
      <Extremadura
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Extremadura')}
      />
      <Galicia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Galicia')}
      />
      <IslasBaleares
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('IslasBaleares')}
      />
      <IslasCanarias
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('IslasCanarias')}
      />
      <Madrid
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Madrid')}
      />
      <Murcia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Murcia')}
      />
      <Navarra
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Navarra')}
      />
      <PaisVasco
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('PaisVasco')}
      />
      <Rioja
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Rioja')}
      />
    </div>
  );
};

export default SideCcaaNavigation;
