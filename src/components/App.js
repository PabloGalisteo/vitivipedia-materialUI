import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
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
  // const toggleMapas = () => showMapas(!showMapas);

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
        <Espana />
        <img src={EspanaMapa} alt="España"></img>
        <Andalucia
          onClick={() => {
            showMapas(!mapas);
          }}
        />
        {mapas && <img src={AndaluciaMapa} alt="Andalucia"></img>}
      </div>
    </ThemeProvider>
  );
}

export default App;
