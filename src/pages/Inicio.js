import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

// -------- botones ----------- //
import Espana from '../components/ui/botonesCCAA/Espana';
import Andalucia from '../components/ui/botonesCCAA/Andalucia';
import Aragon from '../components/ui/botonesCCAA/Aragon';
import Asturias from '../components/ui/botonesCCAA/Asturias';
import Cantabria from '../components/ui/botonesCCAA/Cantabria';
import CastillaLaMancha from '../components/ui/botonesCCAA/CastillaLaMancha';
import CastillaLeon from '../components/ui/botonesCCAA/CastillaLeon';
import Cataluna from '../components/ui/botonesCCAA/Cataluna';
import Extremadura from '../components/ui/botonesCCAA/Extremadura';
import Galicia from '../components/ui/botonesCCAA/Galicia';
import IslasBaleares from '../components/ui/botonesCCAA/IslasBaleares';
import IslasCanarias from '../components/ui/botonesCCAA/IslasCanarias';
import Madrid from '../components/ui/botonesCCAA/Madrid';
import Murcia from '../components/ui/botonesCCAA/Murcia';
import Navarra from '../components/ui/botonesCCAA/Navarra';
import PaisVasco from '../components/ui/botonesCCAA/PaisVasco';
import Rioja from '../components/ui/botonesCCAA/Rioja';
import Valencia from '../components/ui/botonesCCAA/Valencia';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  },
  width: {
    width: '100%'
  },
  marginBottomButton: {
    marginBottom: '400px'
  }
}));

const Inicio = () => {
  const [showEspana, setShowEspana] = useState(true);
  const [showAndalucia, setShowAndalucia] = useState(false);
  const [showAragon, setShowAragon] = useState(false);
  const [showAsturias, setShowAsturias] = useState(false);
  const [showCantabria, setShowCantabria] = useState(false);
  const [showCastillaLaMancha, setShowCastillaLaMancha] = useState(false);
  const [showCastillaLeon, setShowCastillaLeon] = useState(false);
  const [showCataluna, setShowCataluna] = useState(false);
  const [showExtremadura, setShowExtremadura] = useState(false);
  const [showGalicia, setShowGalicia] = useState(false);
  const [showIslasBaleares, setShowIslasBaleares] = useState(false);
  const [showIslasCanarias, setShowIslasCanarias] = useState(false);
  const [showMadrid, setShowMadrid] = useState(false);
  const [showMurcia, setShowMurcia] = useState(false);
  const [showNavarra, setShowNavarra] = useState(false);
  const [showPaisVasco, setShowPaisVasco] = useState(false);
  const [showRioja, setShowRioja] = useState(false);
  const [showValencia, setShowValencia] = useState(false);

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
    } else if (mapName === 'Andalucia') {
      setShowEspana(true);
      setShowAndalucia(false);
      setShowAragon(false);
    } else if (mapName === 'Asturias') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(true);
    } else if (mapName === 'Cantabria') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(true);
    } else if (mapName === 'CastillaLaMancha') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(true);
    } else if (mapName === 'CastillaLeon') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(true);
    } else if (mapName === 'Cataluna') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(true);
    } else if (mapName === 'Extremadura') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(true);
    } else if (mapName === 'Galicia') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(true);
    } else if (mapName === 'IslasBaleares') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(true);
    } else if (mapName === 'IslasCanarias') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(true);
    } else if (mapName === 'Madrid') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(true);
    } else if (mapName === 'Murcia') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(false);
      setShowMurcia(true);
    } else if (mapName === 'Navarra') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(false);
      setShowMurcia(false);
      setShowNavarra(true);
    } else if (mapName === 'PaisVasco') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(false);
      setShowMurcia(false);
      setShowNavarra(false);
      setShowPaisVasco(true);
    } else if (mapName === 'Rioja') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(false);
      setShowMurcia(false);
      setShowNavarra(false);
      setShowPaisVasco(false);
      setShowRioja(true);
    } else if (mapName === 'Valencia') {
      setShowEspana(false);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(false);
      setShowMurcia(false);
      setShowNavarra(false);
      setShowPaisVasco(false);
      setShowRioja(false);
      setShowValencia(true);
    } else {
      setShowEspana(true);
      setShowAndalucia(false);
      setShowAragon(false);
      setShowAsturias(false);
      setShowCantabria(false);
      setShowCastillaLaMancha(false);
      setShowCastillaLeon(false);
      setShowCataluna(false);
      setShowExtremadura(false);
      setShowGalicia(false);
      setShowIslasBaleares(false);
      setShowIslasCanarias(false);
      setShowMadrid(false);
      setShowMurcia(false);
      setShowNavarra(false);
      setShowPaisVasco(false);
      setShowRioja(false);
      setShowValencia(false);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <div className={classes.sideBar}>
            <Espana onClick={() => toggleMapas('Espana')} />
            <Andalucia onClick={() => toggleMapas('Andalucia')} />
            <Aragon onClick={() => toggleMapas('Aragon')} />
            <Asturias onClick={() => toggleMapas('Asturias')} />
            <Cantabria onClick={() => toggleMapas('Cantabria')} />
            <CastillaLaMancha onClick={() => toggleMapas('CastillaLaMancha')} />
            <CastillaLeon onClick={() => toggleMapas('CastillaLeon')} />
            <Cataluna onClick={() => toggleMapas('Cataluna')} />
            <Extremadura onClick={() => toggleMapas('Extremadura')} />
            <Galicia onClick={() => toggleMapas('Galicia')} />
            <IslasBaleares onClick={() => toggleMapas('IslasBaleares')} />
            <IslasCanarias onClick={() => toggleMapas('IslasCanarias')} />
            <Madrid onClick={() => toggleMapas('Madrid')} />
            <Murcia onClick={() => toggleMapas('Murcia')} />
            <Navarra onClick={() => toggleMapas('Navarra')} />
            <PaisVasco onClick={() => toggleMapas('PaisVasco')} />
            <Rioja onClick={() => toggleMapas('Rioja')} />
            <Valencia onClick={() => toggleMapas('Valencia')} />
          </div>
        </Grid>
        <Grid item xs={10}>
          {showEspana && (
            <img className={classes.width} src={EspanaMapa} alt="España"></img>
          )}

          {showAndalucia && (
            <img
              className={classes.width}
              src={AndaluciaMapa}
              alt="Andalucia"
            ></img>
          )}

          {showAragon && (
            <img className={classes.width} src={AragonMapa} alt="Aragon"></img>
          )}
          {showAsturias && (
            <img
              className={classes.width}
              src={AsturiasMapa}
              alt="Asturias"
            ></img>
          )}
          {showCantabria && (
            <img
              className={classes.width}
              src={CantabriaMapa}
              alt="Cantabria"
            ></img>
          )}
          {showCastillaLaMancha && (
            <img
              className={classes.width}
              src={CastillaLaManchaMapa}
              alt="Castilla La Mancha"
            ></img>
          )}
          {showCastillaLeon && (
            <img
              className={classes.width}
              src={CastillaLeonMapa}
              alt="Castilla Y León"
            ></img>
          )}
          {showCataluna && (
            <img
              className={classes.width}
              src={CatalunaMapa}
              alt="Cataluna"
            ></img>
          )}
          {showExtremadura && (
            <img
              className={classes.width}
              src={ExtremaduraMapa}
              alt="Extremadura"
            ></img>
          )}
          {showGalicia && (
            <img
              className={classes.width}
              src={GaliciaMapa}
              alt="Galicia"
            ></img>
          )}
          {showIslasBaleares && (
            <img
              className={classes.width}
              src={IslasBalearesMapa}
              alt="IslasBaleares"
            ></img>
          )}
          {showIslasCanarias && (
            <img
              className={classes.width}
              src={IslasCanariasMapa}
              alt="Islas Canarias"
            ></img>
          )}
          {showMadrid && (
            <img className={classes.width} src={MadridMapa} alt="Madrid"></img>
          )}
          {showMurcia && (
            <img className={classes.width} src={MurciaMapa} alt="Murcia"></img>
          )}
          {showNavarra && (
            <img
              className={classes.width}
              src={NavarraMapa}
              alt="Navarra"
            ></img>
          )}
          {showPaisVasco && (
            <img
              className={classes.width}
              src={PaisVascoMapa}
              alt="País Vasco"
            ></img>
          )}
          {showRioja && (
            <img className={classes.width} src={RiojaMapa} alt="Rioja"></img>
          )}
          {showValencia && (
            <img
              className={classes.width}
              src={ValenciaMapa}
              alt="Valencia"
            ></img>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Inicio;
