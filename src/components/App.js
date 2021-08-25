import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Blog from '../pages/Blog';
import ElaboracionVinoTinto from '../blog-post/ElaboracionVinoTinto';

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
          <Route exact path="/sobre" component={() => <div>Sobre</div>} />
          <Route exact path="/aprende" component={() => <div>Aprende</div>} />
          <Route
            exact
            path="/contacto"
            component={() => <ElaboracionVinoTinto />}
          />
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
