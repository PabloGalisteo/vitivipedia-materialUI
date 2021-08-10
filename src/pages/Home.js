import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import EspanaMapa from '../mapas/España.svg';
import AndaluciaMapa from '../mapas/Andalucía-a.svg';
import AragonMapa from '../mapas/Aragón.svg';

import Espana from '../components/ui/comunidades/Espana';
import Andalucia from '../components/ui/comunidades/Andalucia';
import Aragon from '../components/ui/comunidades/Aragon';

const useStyles = makeStyles((theme) => ({
    sideBar: {
      display: 'flex',
      flexDirection: 'column'
    },
    test: {
      backgroundColor: 'red'
    }
  }));
  


const Home = () =>  {

  const [showEspaña, setShowEspaña] = useState(true);
  const [showAndalucia, setShowAndalucia] = useState(false);
  const [showAragon, setShowAragon] = useState(false);
  const classes = useStyles();

  const toggleMapas = (mapName) => {
    if(mapName === 'Andalucia') {
      
      setShowAndalucia(true);
      setShowEspaña(false);
      setShowAragon(false);

    } else if(mapName === 'Aragon') {
      setShowAndalucia(false);
      setShowEspaña(false);
      setShowAragon(true);
    } else {
      setShowAndalucia(false);
      setShowEspaña(true);
      setShowAragon(false);
    }
  }

    return (
        <div>
        <Grid container >
          <Grid item xs={ 2 } >
            <div className={classes.sideBar}>
              <Espana onClick={() => toggleMapas('Espana')} />
              <Andalucia onClick={() =>  toggleMapas('Andalucia') } />
              <Aragon onClick={() => toggleMapas('Aragon')} />
            </div>
          </Grid>
          <Grid item xs={ 10 }>
            {showEspaña &&  <img src={EspanaMapa} alt="España"></img>}
        
            {showAndalucia && <img src={AndaluciaMapa} alt="Andalucia"></img>}
            
            {showAragon && <img src={AragonMapa} alt="Aragon"></img>}

          </Grid>

        </Grid>
      </div>
    )
}

export default Home;
