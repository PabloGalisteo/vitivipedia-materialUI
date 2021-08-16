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
    marginBottom: '0.76em',
    marginLeft: '1.7em',
    marginRight: '1.2em'
  }
}));

const SideCcaaNavigation = ({ toggleMapas, currentRegion }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <Espana
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Espana')}
        isActive={currentRegion === 'Espana' ? true : false}
      />
      <Andalucia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Andalucia')}
        isActive={currentRegion === 'Andalucia' ? true : false}
      />
      <Aragon
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Aragon')}
        isActive={currentRegion === 'Aragon' ? true : false}
      />
      <Asturias
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Asturias')}
        isActive={currentRegion === 'Asturias' ? true : false}
      />
      <Cantabria
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Cantabria')}
        isActive={currentRegion === 'Cantabria' ? true : false}
      />
      <CastillaLaMancha
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('CastillaLaMancha')}
        isActive={currentRegion === 'CastillaLaMancha' ? true : false}
      />
      <CastillaLeon
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('CastillaLeon')}
        isActive={currentRegion === 'CastillaLeon' ? true : false}
      />
      <Cataluna
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Cataluna')}
        isActive={currentRegion === 'Cataluna' ? true : false}
      />
      <Extremadura
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Extremadura')}
        isActive={currentRegion === 'Extremadura' ? true : false}
      />
      <Galicia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Galicia')}
        isActive={currentRegion === 'Galicia' ? true : false}
      />
      <IslasBaleares
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('IslasBaleares')}
        isActive={currentRegion === 'IslasBaleares' ? true : false}
      />
      <IslasCanarias
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('IslasCanarias')}
        isActive={currentRegion === 'IslasCanarias' ? true : false}
      />
      <Madrid
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Madrid')}
        isActive={currentRegion === 'Madrid' ? true : false}
      />
      <Murcia
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Murcia')}
        isActive={currentRegion === 'Murcia' ? true : false}
      />
      <Navarra
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Navarra')}
        isActive={currentRegion === 'Navarra' ? true : false}
      />
      <PaisVasco
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('PaisVasco')}
        isActive={currentRegion === 'PaisVasco' ? true : false}
      />
      <Rioja
        marginButtton={classes.marginBottomButton}
        onClick={() => toggleMapas('Rioja')}
        isActive={currentRegion === 'Rioja' ? true : false}
      />
    </div>
  );
};

export default SideCcaaNavigation;
