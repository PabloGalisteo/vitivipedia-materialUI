import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';

import Inicio from '../pages/Inicio';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Blog from '../pages/Blog';
import Contacto from '../pages/Contacto';
import Articles from './Articles';
import Sobre from '../pages/Sobre';
import AvisoLegal from '../pages/AvisoLegal';
import PoliticaPrivacidad from '../pages/PoliticaPrivacidad';
import Cookies from '../pages/Cookies';
import Afiliacion from '../pages/Afiliacion';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const [isLogoClicked, setIsLogoClicked] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setIsLogoClicked={setIsLogoClicked}
        />
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
          <Route exact path="/blog" component={() => <Blog />} />
          <Route exact path="/sobre" component={() => <Sobre />} />
          <Route exact path="/aprende" component={() => <div>Aprende</div>} />
          <Route exact path="/contacto" component={() => <Contacto />} />
          <Route exact path="/aviso-legal" component={() => <AvisoLegal />} />
          <Route
            exact
            path="/politica-de-privacidad"
            component={() => <PoliticaPrivacidad />}
          />
          <Route
            exact
            path="/politica-sobre-cookies"
            component={() => <Cookies />}
          />
          <Route exact path="/afiliacion" component={() => <Afiliacion />} />
          <Route path="/blog/:page" component={() => <Articles />} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setIsLogoClicked={setIsLogoClicked}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
