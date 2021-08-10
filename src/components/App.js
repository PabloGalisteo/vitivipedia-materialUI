import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { styled, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function App() {
  // const [mapas, showMapas] = useState(true);
  // const toggleMapas = () => showMapas(!mapas);

  const Inicio = () => {
    const [showEspana, setShowEspana] = useState(true);
    const [showAndalucia, setShowAndalucia] = useState(false);
    const [showAragon, setShowAragon] = useState(false);
    const classes = useStyles();

    const toggleMapas = mapName => {
      if (mapName === 'Andalucia') {
        setShowEspana(false);
        setShowAndalucia(true);
        setShowAragon(false);
      } else if (mapName === 'Aragon') {
        setShowEspana(false);
        setShowAndalucia(false);
        setShowAragon(true);
      } else {
        setShowEspana(true);
        setShowAndalucia(false);
        setShowAragon(false);
      }
    };
  };

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
        <Grid container>
          <Grid item xs={1}>
            <div>
              <Espana onClick={() => toggleMapas('Espana')} />
              <Andalucia onClick={() => toggleMapas('Andalucia')} />
              <Aragon onClick={() => toggleMapas('Aragon')} />
            </div>
          </Grid>
          <Grid item xs={11}>
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
