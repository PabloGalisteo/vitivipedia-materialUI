import React, { useState, useEffect, useRef } from 'react';
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
import ValenciaMapa from '../mapas/Valencia.js';

import SideCcaaNavigation from '../components/ui/SideCcaaNavigation';
import CardComponent from '../components/cards/CardComponent';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
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
    backgroundColor: '#daf7ff',
    margin: '0.5em'
  },
  comunidadesStyleBtn: {
    backgroundColor: '#f8ac88',
    margin: '0.5em',
    '&:hover': {
      backgroundColor: '#f78550'
    }
  },
  mapBorderRadius: {
    borderRadius: '1em',
    overflow: 'hidden'
  },
  mapRoot: {
    flex: 1
  }
}));

const Inicio = ({ isLogoClicked, setIsLogoClicked }) => {
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
    },
    {
      name: 'Valencia',
      component: ValenciaMapa,
      isVisible: false
    }
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('');
  const [mapHeight, setMapHeight] = useState(null);
  const classes = useStyles();
  const mapRef = useRef();

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

  const toggleM = toggleMapas;

  useEffect(() => {
    if (isLogoClicked) {
      toggleM('Espana');
      setIsLogoClicked(false);
    }
  }, [isLogoClicked, setIsLogoClicked, toggleM]);

  useEffect(() => {
    const resize = () => {
      if (window.outerWidth < 960) {
        setMapHeight(null);
        return;
      }
      if (mapRef.current) {
        const height = mapRef.current.clientHeight;
        setMapHeight(height);
      }
    };

    resize();
    window.addEventListener('resize', () => {
      resize();
    });
  }, []);

  return (
    <div className={classes.mapRoot}>
      <Grid container>
        <SwipeableDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.toolbarMargin} />
          <SideCcaaNavigation
            toggleMapas={toggleMapas}
            currentRegion={currentRegion}
            setCurrentRegion={setCurrentRegion}
            mapHeight={mapHeight}
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
            mapHeight={mapHeight}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <Box
            color="text.primary"
            className={`${classes.mapContainer} ${classes.mapBorderRadius}`}
            ref={mapRef}
          >
            {mapsList.map((map, index) => {
              if (!map.isVisible) {
                return null;
              }

              //'Doble' return 'cos Espana map is the only one getting those props
              if (map.component === EspanaMapa) {
                return (
                  <map.component
                    className={classes.width}
                    src={map.component}
                    onRegionSelected={setCurrentRegion}
                    currentRegion={currentRegion}
                    key={index}
                    toggleMapas={toggleMapas}
                  />
                );
              }

              return (
                <map.component
                  className={classes.width}
                  src={map.component}
                  key={index}
                />
              );
            })}
          </Box>
          <Button
            variant="contained"
            className={`${classes.navigationToggler} ${classes.comunidadesStyleBtn}`}
            onClick={() => setOpenDrawer(true)}
          >
            Comunidades
          </Button>
        </Grid>
      </Grid>
      <CardComponent />
    </div>
  );
};

export default Inicio;
