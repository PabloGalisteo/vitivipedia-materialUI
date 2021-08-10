import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EspanaMapa from '../mapas/España.svg';
import AndaluciaMapa from '../mapas/Andalucía-a.svg';
import AragonMapa from '../mapas/Aragón.svg';

import theme from './ui/Theme';
import Header from '../components/ui/Header';

// -------- mapas ----------- //
import Espana from './ui/comunidades/Espana';
import Andalucia from './ui/comunidades/Andalucia';
import Aragon from './ui/comunidades/Aragon';

function App() {
  const [mapas, showMapas] = useState(true);
  const toggleMapas = () => showMapas(!mapas);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/blog" component={() => <div>Blog</div>} />
          <Route exact path="/sobre" component={() => <div>Sobre</div>} />
          <Route exact path="/aprende" component={() => <div>Aprende</div>} />
          <Route exact path="/contacto" component={() => <div>Contacto</div>} />
        </Switch>
      </BrowserRouter>
      <div>

        <Grid container >
          <Grid item xs={ 3 } >
            <Espana />
            <Andalucia onClick={toggleMapas} />
            <Aragon onClick={toggleMapas} />
          </Grid>
          <Grid item xs={ 9 }>
            <img src={EspanaMapa} alt="España"></img>
        
            {mapas && <img src={AndaluciaMapa} alt="Andalucia"></img>}
            
            {mapas && <img src={AragonMapa} alt="Aragon"></img>}

          </Grid>

        </Grid>

       
       
      </div>
    </ThemeProvider>
  );
}

export default App;
