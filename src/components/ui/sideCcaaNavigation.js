import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// -------- botones ----------- //
import Espana from '../ui/botonesCCAA/Espana';
import Andalucia from '../ui/botonesCCAA/Andalucia';
import Aragon from '../ui/botonesCCAA/Aragon';
import Asturias from '../ui/botonesCCAA/Asturias';
import Cantabria from '../ui/botonesCCAA/Cantabria';
import CastillaLaMancha from '../ui/botonesCCAA/CastillaLaMancha';
import CastillaLeon from '../ui/botonesCCAA/CastillaLeon';
import Cataluna from '../ui/botonesCCAA/Cataluna';
import Extremadura from '../ui/botonesCCAA/Extremadura';
import Galicia from '../ui/botonesCCAA/Galicia';
import IslasBaleares from '../ui/botonesCCAA/IslasBaleares';
import IslasCanarias from '../ui/botonesCCAA/IslasCanarias';
import Madrid from '../ui/botonesCCAA/Madrid';
import Murcia from '../ui/botonesCCAA/Murcia';
import Navarra from '../ui/botonesCCAA/Navarra';
import PaisVasco from '../ui/botonesCCAA/PaisVasco';
import Rioja from '../ui/botonesCCAA/Rioja';
import Valencia from '../ui/botonesCCAA/Valencia';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const sideCcaaNavigation = ({ toggleMapas }) => {
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
      <Valencia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Valencia')}
      />
    </div>
  );
};

export default sideCcaaNavigation;
