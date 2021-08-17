import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BotonComponent from './botonesCCAA/BotonComponent';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column'
  },
  marginBottomButton: {
    marginBottom: '0.76em',
    marginLeft: '1.7em',
    marginRight: '1.2em'
  }
}));

const SideCcaaNavigation = ({
  toggleMapas,
  currentRegion,
  setCurrentRegion
}) => {
  const classes = useStyles();

  const [buttonList] = useState([
    { title: 'España', value: 'Espana', color: '#ccc' },
    { title: 'Andalucía', value: 'Andalucia', color: '#ccc' },
    { title: 'Aragón', value: 'Aragon', color: '#ccc' },
    { title: 'Asturias', value: 'Asturias', color: '#ccc' },
    { title: 'Cantabria', value: 'Cantabria', color: '#ccc' },
    { title: 'Castilla la Mancha', value: 'CastillaLaMancha', color: '#ccc' },
    { title: 'Castilla y León', value: 'CastillaLeon', color: '#ccc' },
    { title: 'Cataluña', value: 'Cataluna', color: '#ccc' },
    { title: 'Extremadura', value: 'Extremadura', color: '#ccc' },
    { title: 'Galcia', value: 'Galicia', color: '#ccc' },
    { title: 'Islas Baleares', value: 'IslasBaleares', color: '#ccc' },
    { title: 'Islas Canarias', value: 'IslasCanarias', color: '#a01717' },
    { title: 'Madrid', value: 'Madrid', color: '#ccc' },
    { title: 'Murcia', value: 'Murcia', color: '#ccc' },
    { title: 'Navarra', value: 'Navarra', color: '#ccc' },
    { title: 'País Vasco', value: 'PaisVasco', color: '#ccc' },
    { title: 'La Rioja', value: 'Rioja', color: '#ccc' }
  ]);

  return (
    <div className={classes.sideBar}>
      {buttonList.map(item => (
        <BotonComponent
          marginButtton={classes.marginBottomButton}
          onClick={() => toggleMapas(item.value)}
          isActive={currentRegion === item.value ? true : false}
          title={item.title}
          buttonColor={item.color}
          hoverButtonList={setCurrentRegion}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default SideCcaaNavigation;