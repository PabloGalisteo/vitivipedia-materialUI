import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BotonComponent from './botonesCCAA/BotonComponent';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5em',
    height: '110vh',
    overflow: 'scroll'
  },
  marginBottomButton: {
    marginBottom: '0.76em',
    marginLeft: '1.7em',
    marginRight: '1.2em',
    height: '3em'
  }
}));

const SideCcaaNavigation = ({
  toggleMapas,
  currentRegion,
  setCurrentRegion,
  mapHeight,
  regionSelected
}) => {
  const classes = useStyles();

  const [buttonList] = useState([
    { title: 'España', value: 'Espana', color: '#ee6161' },
    { title: 'Andalucía', value: 'Andalucia', color: '#E84A28' },
    { title: 'Aragón', value: 'Aragon', color: '#F84937' },
    { title: 'Asturias', value: 'Asturias', color: '#30cf60' },
    { title: 'Cantabria', value: 'Cantabria', color: '#4aa74f' },
    {
      title: 'Castilla la Mancha',
      value: 'CastillaLaMancha',
      color: '#EC6C16'
    },
    { title: 'Castilla y León', value: 'CastillaLeon', color: '#9A2526' },
    { title: 'Cataluña', value: 'Cataluna', color: '#810E47' },
    { title: 'Extremadura', value: 'Extremadura', color: '#C61922' },
    { title: 'Galicia', value: 'Galicia', color: '#ee032a' },
    { title: 'Islas Baleares', value: 'IslasBaleares', color: '#1467c5' },
    { title: 'Islas Canarias', value: 'IslasCanarias', color: '#f8ac88' },
    { title: 'Madrid', value: 'Madrid', color: '#E0935F' },
    { title: 'Murcia', value: 'Murcia', color: '#FF9F1D' },
    { title: 'Navarra', value: 'Navarra', color: '#F9DA3B' },
    { title: 'País Vasco', value: 'PaisVasco', color: '#F4A679' },
    { title: 'La Rioja', value: 'Rioja', color: '#f77c66' },
    { title: 'Valencia', value: 'Valencia', color: '#FFC407' }
  ]);

  return (
    <div
      className={classes.sideBar}
      style={{ height: mapHeight ? mapHeight : '' }}
    >
      {buttonList.map((item, index) => (
        <BotonComponent
          key={index + item.value}
          marginButtton={classes.marginBottomButton}
          onClick={() => toggleMapas(item.value)}
          isActive={currentRegion === item.value ? true : false}
          title={item.title}
          buttonColor={item.color}
          hoverButtonList={setCurrentRegion}
          value={item.value}
          regionSelected={regionSelected}
        />
      ))}
    </div>
  );
};

export default SideCcaaNavigation;
