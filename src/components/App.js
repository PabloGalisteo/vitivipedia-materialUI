import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import { styled, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import EspanaMapa from '../mapas/España.svg';
// import AndaluciaMapa from '../mapas/Andalucía-a.svg';
// import AragonMapa from '../mapas/Aragón.svg';

import theme from './ui/Theme';
import Header from '../components/ui/Header';

import Home from '../pages/Home';

// -------- mapas ----------- //
// import Espana from './ui/comunidades/Espana';
// import Andalucia from './ui/comunidades/Andalucia';
// import Aragon from './ui/comunidades/Aragon';

// const useStyles = makeStyles((theme) => ({
//   sideBar: {
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   test: {
//     backgroundColor: 'red'
//   }
// }));


function App() {
  // const [mapas, showMapas] = useState(true);
  //const toggleMapas = () => showMapas(!mapas);

  // const [showEspaña, setShowEspaña] = useState(true);
  // const [showAndalucia, setShowAndalucia] = useState(false);
  // const [showAragon, setShowAragon] = useState(false);

  // const classes = useStyles();

  // const toggleMapas = (mapName) => {
  //   if(mapName === 'Andalucia') {
      
  //     setShowAndalucia(true);
  //     setShowEspaña(false);
  //     setShowAragon(false);

  //   } else if(mapName === 'Aragon') {
  //     setShowAndalucia(false);
  //     setShowEspaña(false);
  //     setShowAragon(true);
  //   } else {
  //     setShowAndalucia(false);
  //     setShowEspaña(true);
  //     setShowAragon(false);
  //   }
  // }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
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
