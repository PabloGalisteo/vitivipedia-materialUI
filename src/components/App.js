import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { styled, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Inicio />} />
          <Route exact path="/blog" component={() => <div>Blog</div>} />
          <Route exact path="/sobre" component={() => <div>Sobre</div>} />
          <Route exact path="/aprende" component={() => <div>Aprende</div>} />
          <Route exact path="/contacto" component={() => <div>Contacto</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
