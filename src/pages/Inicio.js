import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';

// -------- mapas ----------- //
import EspanaMapa from '../mapas/España.js';
import { ReactComponent as AndaluciaMapa } from '../mapas/Andalucia.svg';
import { ReactComponent as AragonMapa } from '../mapas/Aragón.svg';
import { ReactComponent as AsturiasMapa } from '../mapas/Asturias.svg';
import { ReactComponent as CantabriaMapa } from '../mapas/Cantabria.svg';
import { ReactComponent as CastillaLaManchaMapa } from '../mapas/Castilla-la-Mancha.svg';
import { ReactComponent as CastillaLeonMapa } from '../mapas/Castilla y León.svg';
import { ReactComponent as CatalunaMapa } from '../mapas/Cataluña.svg';
import { ReactComponent as ExtremaduraMapa } from '../mapas/Extremadura.svg';
import { ReactComponent as GaliciaMapa } from '../mapas/Galicia.svg';
import { ReactComponent as IslasBalearesMapa } from '../mapas/Islas Baleares.svg';
import { ReactComponent as IslasCanariasMapa } from '../mapas/Islas Canarias.svg';
import { ReactComponent as MadridMapa } from '../mapas/Madrid.svg';
import { ReactComponent as MurciaMapa } from '../mapas/Murcia.svg';
import { ReactComponent as NavarraMapa } from '../mapas/Navarra.svg';
import { ReactComponent as PaisVascoMapa } from '../mapas/País Vasco.svg';
import { ReactComponent as RiojaMapa } from '../mapas/Rioja.svg';
// import {ReactComponent as ValenciaMapa} from '../mapas/Valencia.svg';

import SideCcaaNavigation from '../components/ui/SideCcaaNavigation';

const useStyles = makeStyles(theme => ({
  width: {
    width: '100%'
  },
  opacity: {
    opacity: 0.4
  },
  marginBottomButton: {
    marginBottom: '9.4em'
  },
  hideButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  navigationToggler: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mapContainer: {
    backgroundColor: '#daf7ff'
  }
}));

const Inicio = () => {
  const [mapsList, toogleMapsList] = useState([
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
    }
    // {
    //   name: 'Valencia',
    //   component: ValenciaMapa,
    //   isVisible: false
    // }
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('');
  const classes = useStyles();

  const toggleMapas = mapName => {
    const updatedMapsList = [...mapsList];

    updatedMapsList.forEach(map => {
      if (map.name === mapName) {
        map.isVisible = true;
      } else {
        map.isVisible = false;
      }
    });
    toogleMapsList(updatedMapsList);
    setOpenDrawer(false);
  };

  return (
    <div>
      <Grid container>
        <SwipeableDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <SideCcaaNavigation
            toggleMapas={toggleMapas}
            currentRegion={currentRegion}
            setCurrentRegion={setCurrentRegion}
          />
        </SwipeableDrawer>
        <Grid
          item
          md={2}
          xs={12}
          className={[classes.hideButtons, classes.marginBottomButton].join(
            ' '
          )}
        >
          <SideCcaaNavigation
            toggleMapas={toggleMapas}
            currentRegion={currentRegion}
            setCurrentRegion={setCurrentRegion}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <Button
            variant="contained"
            className={classes.navigationToggler}
            onClick={() => setOpenDrawer(true)}
          >
            Comunidades
          </Button>

          <Box color="text.primary" className={classes.mapContainer}>
            {mapsList.map((map, index) => {
              if (!map.isVisible) {
                return null;
              }

              return (
                <map.component
                  className={classes.width}
                  src={map.component}
                  onRegionSelected={setCurrentRegion}
                  currentRegion={currentRegion}
                  key={index}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Inicio;
