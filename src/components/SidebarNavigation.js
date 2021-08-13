import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
// import Valencia from '../components/ui/botonesCCAA/Valencia';

const useStyles = makeStyles(() => ({
    sideBar: {
      display: 'flex',
      flexDirection: 'column'
    },

  }));

const SidebarNavigation = ( { toggleMapas, hoverElement } ) => {
  const classes = useStyles();
    // const [getX, setX] = useState(0);
    
    // setTimeout(() => {
    //   setX(5);
    // }, 5000);
  

    // takes two parameters
    // first one is callback
    // second one is dependency
    // useEffect(() => {
    //   console.log('running');
    // }, [getX])

    // will only run once, when this component is initiated
    // useEffect(() => {
      // console.log('called once');
    //   toggleMapas('Andalucia');
    // }, []);

    // useEffect(() => {
    //   console.log('called many times');
    // });

    
    return (
        <div className={classes.sideBar}>
            <Espana onClick={() => toggleMapas('Espana')} isActive={ hoverElement === 'Espana' ? true: false }  />
            <Andalucia onClick={() => toggleMapas('Andalucia')} isActive={ hoverElement === 'Andalucia' ? true: false } />
            <Aragon onClick={() => toggleMapas('Aragon')} isActive={ hoverElement === 'Aragon' ? true: false } />
            <Asturias onClick={() => toggleMapas('Asturias')} isActive={ hoverElement === 'Asturias' ? true: false } />
            <Cantabria onClick={() => toggleMapas('Cantabria')} isActive={ hoverElement === 'Cantabria' ? true: false } />
            <CastillaLaMancha onClick={() => toggleMapas('CastillaLaMancha')} isActive={ hoverElement === 'CastillaLaMancha' ? true: false } />
            <CastillaLeon onClick={() => toggleMapas('CastillaLeon')} isActive={ hoverElement === 'CastillaLeon' ? true: false } />
            <Cataluna onClick={() => toggleMapas('Cataluna')} isActive={ hoverElement === 'Cataluna' ? true: false } />
            <Extremadura onClick={() => toggleMapas('Extremadura')} isActive={ hoverElement === 'Extremadura' ? true: false } />
            <Galicia onClick={() => toggleMapas('Galicia')} isActive={ hoverElement === 'Galicia' ? true: false } />
            <IslasBaleares onClick={() => toggleMapas('IslasBaleares')} isActive={ hoverElement === 'IslasBaleares' ? true: false } />
            <IslasCanarias onClick={() => toggleMapas('IslasCanarias')} isActive={ hoverElement === 'IslasCanarias' ? true: false } />
            <Madrid onClick={() => toggleMapas('Madrid')} isActive={ hoverElement === 'Madrid' ? true: false } />
            <Murcia onClick={() => toggleMapas('Murcia')} isActive={ hoverElement === 'Murcia' ? true: false } />
            <Navarra onClick={() => toggleMapas('Navarra')}  isActive={ hoverElement === 'Navarra' ? true: false } />
            <PaisVasco onClick={() => toggleMapas('PaisVasco')} isActive={ hoverElement === 'PaisVasco' ? true: false } />
            <Rioja onClick={() => toggleMapas('Rioja')} />
            {/* <Valencia onClick={() => toggleMapas('Valencia')} /> */}
          </div>
    )
}

export default SidebarNavigation;
