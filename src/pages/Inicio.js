import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// --------- components ---------//

import sideCcaaNavigation from '../components/ui/sideCcaaNavigation';

// -------- mapas ----------- //
import EspanaMapa from '../mapas/España.svg';
import AndaluciaMapa from '../mapas/Andalucía-a.svg';
import AragonMapa from '../mapas/Aragón.svg';
import AsturiasMapa from '../mapas/Asturias.svg';
import CantabriaMapa from '../mapas/Cantabria.svg';
import CastillaLaManchaMapa from '../mapas/Castilla-la-Mancha.svg';
import CastillaLeonMapa from '../mapas/Castilla y León.svg';
import CatalunaMapa from '../mapas/Cataluña.svg';
import ExtremaduraMapa from '../mapas/Extremadura.svg';
import GaliciaMapa from '../mapas/Galicia.svg';
import IslasBalearesMapa from '../mapas/Islas Baleares.svg';
import IslasCanariasMapa from '../mapas/Islas Canarias.svg';
import MadridMapa from '../mapas/Madrid.svg';
import MurciaMapa from '../mapas/Murcia.svg';
import NavarraMapa from '../mapas/Navarra.svg';
import PaisVascoMapa from '../mapas/País Vasco.svg';
import RiojaMapa from '../mapas/Rioja.svg';
import ValenciaMapa from '../mapas/Valencia.svg';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  },
  width: {
    width: '100%'
  },
  marginBottomButton: {
    marginBottom: '0.5em'
  }
}));

const Inicio = () => {
  const [mapsList, toggleMapsList] = useState([
    {
      name: 'Espana',
      component: EspanaMapa,
      isVisible: true
    },
    {
      name: 'Andalucia',
      component: AndaluciaMapa,
      isVisible: false
    },
    {
      name: 'Aragon',
      component: AragonMapa,
      isVisible: false
    },
    {
      name: 'Asturias',
      component: AsturiasMapa,
      isVisible: false
    },
    {
      name: 'Cantabria',
      component: CantabriaMapa,
      isVisible: false
    },
    {
      name: 'CastillaLaMancha',
      component: CastillaLaManchaMapa,
      isVisible: false
    },
    {
      name: 'CastillaLeon',
      component: CastillaLeonMapa,
      isVisible: false
    },
    {
      name: 'Cataluna',
      component: CatalunaMapa,
      isVisible: false
    },
    {
      name: 'Extremadura',
      component: ExtremaduraMapa,
      isVisible: false
    },
    {
      name: 'Galicia',
      component: GaliciaMapa,
      isVisible: false
    },
    {
      name: 'IslasBaleares',
      component: IslasBalearesMapa,
      isVisible: false
    },
    {
      name: 'IslasCanarias',
      component: IslasCanariasMapa,
      isVisible: false
    },
    {
      name: 'Madrid',
      component: MadridMapa,
      isVisible: false
    },
    {
      name: 'Murcia',
      component: MurciaMapa,
      isVisible: false
    },
    {
      name: 'Navarra',
      component: NavarraMapa,
      isVisible: false
    },
    {
      name: 'PaisVasco',
      component: PaisVascoMapa,
      isVisible: false
    },
    {
      name: 'Rioja',
      component: RiojaMapa,
      isVisible: false
    },
    {
      name: 'Valencia',
      component: ValenciaMapa,
      isVisible: false
    }
  ]);

  const toggleMapas = mapName => {
    const updatedMapList = [...mapsList];

    updatedMapList.forEach(map => {
      if (map.name === mapName) {
        map.isInvisible = true;
      } else {
        map.isInvisible = false;
      }
    });

    toggleMapsList(updatedMapList);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <sideCcaaNavigation toggleMapas={toggleMapas} />
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </div>
  );
};

export default Inicio;
