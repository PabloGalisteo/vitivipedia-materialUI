import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

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


import SidebarNavigation from '../components/SidebarNavigation';

// -------- botones ----------- //
// import Espana from '../components/ui/botonesCCAA/Espana';
// import Andalucia from '../components/ui/botonesCCAA/Andalucia';
// import Aragon from '../components/ui/botonesCCAA/Aragon';
// import Asturias from '../components/ui/botonesCCAA/Asturias';
// import Cantabria from '../components/ui/botonesCCAA/Cantabria';
// import CastillaLaMancha from '../components/ui/botonesCCAA/CastillaLaMancha';
// import CastillaLeon from '../components/ui/botonesCCAA/CastillaLeon';
// import Cataluna from '../components/ui/botonesCCAA/Cataluna';
// import Extremadura from '../components/ui/botonesCCAA/Extremadura';
// import Galicia from '../components/ui/botonesCCAA/Galicia';
// import IslasBaleares from '../components/ui/botonesCCAA/IslasBaleares';
// import IslasCanarias from '../components/ui/botonesCCAA/IslasCanarias';
// import Madrid from '../components/ui/botonesCCAA/Madrid';
// import Murcia from '../components/ui/botonesCCAA/Murcia';
// import Navarra from '../components/ui/botonesCCAA/Navarra';
// import PaisVasco from '../components/ui/botonesCCAA/PaisVasco';
// import Rioja from '../components/ui/botonesCCAA/Rioja';
// import Valencia from '../components/ui/botonesCCAA/Valencia';


// default spacing for material ui is 8 px
const useStyles = makeStyles((theme) => ({
  width: {
    width: '100%'
  },
  marginBottomButton: {
    // marginBottom: '400px'
    marginBottom: theme.spacing(1)
  },
  hideButtons: {
    [theme.breakpoints.down('xs')]: {
      display:  'none'
    }
  },
  navigationToggler: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
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
    },
    {
      name: 'Valencia',
      component: ValenciaMapa,
      isVisible: false
    },
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
 
  const classes = useStyles();

  const toggleMapas = mapName => {
    //const updatedMapsList = mapsList.splice();
    const updatedMapsList = [...mapsList];
    
    updatedMapsList.forEach((map) => {
      if(map.name === mapName) {
        map.isVisible = true;
      } else {
        map.isVisible = false;
      }
    });
    toogleMapsList(updatedMapsList);
    setOpenDrawer(false);

  };

  // xs={4} => sm={4} md={4} lg={4} xl={4}
  // xs={4} lg={2} => xs={4} sm={4} md={4} lg={2} xl={2}
  // lg={4} => xs={12} sm={12} md={12} lg={4} xl={4}

  return (
    <div>
      <Grid container>
      <SwipeableDrawer
        //disableBackdropTransition={!iOS}
        //disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
         <SidebarNavigation toggleMapas={toggleMapas} />
      </SwipeableDrawer>
        <Grid item md={2} xs={12} className={[classes.hideButtons, classes.marginBottomButton].join(' ')} >
          <SidebarNavigation toggleMapas={toggleMapas} />
        </Grid>
        <Grid item md={10} xs={12} >
          <Button variant="contained" className={classes.navigationToggler} onClick={() => setOpenDrawer(true)}>
            Toggle Navigation
          </Button>
          {mapsList.map((map, index) => {
            // const componentName = map.component;
            // return <componentName /> 
            if(! map.isVisible) {
              return null;
            }
            // this will not run if condition is true;
            return  <img
            className={classes.width}
            src={map.component}
            alt="Valencia"
           /> 
          } )}

        </Grid>
      </Grid>
    </div>
  );
};

export default Inicio;
