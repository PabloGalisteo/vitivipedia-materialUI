import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Espana from '../components/ui/botonesCCAA/Espana';
import Andalucia from '../components/ui/botonesCCAA/Andalucia';
import Aragon from '../components/ui/botonesCCAA/Aragon';
import Asturias from '../components/ui/botonesCCAA/Asturias';
import Cantabria from '../components/ui/botonesCCAA/Cantabria';
import CastillaLaMancha from '../components/ui/botonesCCAA/CastillaLaMancha';
import CastillaLeon from '../components/ui/botonesCCAA/CastillaLeon';
import Cataluna from '../components/ui/botonesCCAA/Cataluna';
import Extremadura from '../components/ui/botonesCCAA/Extremadura';
import Galicia from '../components/ui/botonesCCAA/Galicia';
import IslasBaleares from '../components/ui/botonesCCAA/IslasBaleares';
import IslasCanarias from '../components/ui/botonesCCAA/IslasCanarias';
import Madrid from '../components/ui/botonesCCAA/Madrid';
import Murcia from '../components/ui/botonesCCAA/Murcia';
import Navarra from '../components/ui/botonesCCAA/Navarra';
import PaisVasco from '../components/ui/botonesCCAA/PaisVasco';
import Rioja from '../components/ui/botonesCCAA/Rioja';
import Valencia from '../components/ui/botonesCCAA/Valencia';

const useStyles = makeStyles(() => ({
    sideBar: {
      display: 'flex',
      flexDirection: 'column'
    },

  }));

const SidebarNavigation = ({ toggleMapas }) => {
    const classes = useStyles();

    return (
        <div className={classes.sideBar}>
            <Espana onClick={() => toggleMapas('Espana')} />
            <Andalucia onClick={() => toggleMapas('Andalucia')} />
            <Aragon onClick={() => toggleMapas('Aragon')} />
            <Asturias onClick={() => toggleMapas('Asturias')} />
            <Cantabria onClick={() => toggleMapas('Cantabria')} />
            <CastillaLaMancha onClick={() => toggleMapas('CastillaLaMancha')} />
            <CastillaLeon onClick={() => toggleMapas('CastillaLeon')} />
            <Cataluna onClick={() => toggleMapas('Cataluna')} />
            <Extremadura onClick={() => toggleMapas('Extremadura')} />
            <Galicia onClick={() => toggleMapas('Galicia')} />
            <IslasBaleares onClick={() => toggleMapas('IslasBaleares')} />
            <IslasCanarias onClick={() => toggleMapas('IslasCanarias')} />
            <Madrid onClick={() => toggleMapas('Madrid')} />
            <Murcia onClick={() => toggleMapas('Murcia')} />
            <Navarra onClick={() => toggleMapas('Navarra')} />
            <PaisVasco onClick={() => toggleMapas('PaisVasco')} />
            <Rioja onClick={() => toggleMapas('Rioja')} />
            <Valencia onClick={() => toggleMapas('Valencia')} />
          </div>
    )
}

export default SidebarNavigation;
