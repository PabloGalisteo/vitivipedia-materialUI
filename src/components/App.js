import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

function App() {
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header setIsLogoClicked={setIsLogoClicked} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Inicio
                setIsLogoClicked={setIsLogoClicked}
                isLogoClicked={isLogoClicked}
              />
            )}
          />
          <Route exact path="/blog" component={() => <div>Blog</div>} />
          <Route exact path="/sobre" component={() => <div>Sobre</div>} />
          <Route exact path="/aprende" component={() => <div>Aprende</div>} />
          <Route exact path="/contacto" component={() => <div>Contacto</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
