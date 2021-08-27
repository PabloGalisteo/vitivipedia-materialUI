import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';

import EspanaMapa from '../mapas/España.js';

// --------- icons ---------- //
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SideCcaaNavigation from '../components/ui/SideCcaaNavigation';
import CardComponent from '../components/cards/CardComponent';

import inicialMapList from '../components/mapList';
import winelist from '../wineList/list';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  width: {
    width: '100%'
  },
  opacity: {
    opacity: 0.4
  },
  marginBottomButton: {
    marginBottom: '9.4em'
  },
  hideButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  navigationToggler: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mapContainer: {
    backgroundColor: '#daf7ff',
    margin: '0.5em'
  },
  comunidadesStyleBtn: {
    backgroundColor: '#f8ac88',
    margin: '0.5em',
    '&:hover': {
      backgroundColor: '#f78550'
    }
  },
  mapBorderRadius: {
    borderRadius: '1em',
    overflow: 'hidden'
  },
  mapRoot: {
    flex: 1
  },
  containerButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '0.5em'
  },
  arrowBackStyle: {
    backgroundColor: '#F8AC88',
    '&:hover, &:active': {
      backgroundColor: '#F8AC88'
    },
    height: '2.6em',
    marginTop: '0.5em'
  },
  notShowArrowBiggerScreens: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  bestWinesSentenceStyle: {
    color: '#ffff',
    marginLeft: '7em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2em'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em'
    }
  }
}));

const Inicio = ({ isLogoClicked, setIsLogoClicked }) => {
  const [mapsList, toogleMapsList] = useState(inicialMapList);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('Espana');
  const [regionTitle, setRegionTitle] = useState('España');
  const [mapHeight, setMapHeight] = useState(null);
  const [listOfWines] = useState(winelist);
  const [showRedWineList, setShowRedWineList] = useState(false);
  const [showWhiteWineList, setShowWhiteWineList] = useState(false);
  const [regionSelected, setRegionSelected] = useState(false);

  const classes = useStyles();
  const mapRef = useRef();

  const toggleMapas = mapName => {
    const updatedMapsList = [...mapsList];

    updatedMapsList.forEach(map => {
      if (map.name === mapName) {
        setRegionTitle(map.correctTitle);
        map.isVisible = true;
      } else {
        map.isVisible = false;
      }
    });
    toogleMapsList(updatedMapsList);
    setCurrentRegion(mapName);
    setOpenDrawer(false);
    // setShowRedWineList(false);
    // setShowWhiteWineList(false);
    if (mapName === 'Espana') {
      setRegionSelected(false);
    } else {
      setRegionSelected(true);
    }
  };

  //function to swap the list of wines

  const showRedWines = () => {
    if (showRedWineList) {
      setShowRedWineList(false);
    } else {
      setShowRedWineList(true);
    }
  };

  const showWhiteWines = () => {
    console.log(showWhiteWineList);
    if (showWhiteWineList) {
      setShowWhiteWineList(false);
    } else {
      setShowWhiteWineList(true);
    }
  };

  const toggleM = toggleMapas;

  useEffect(() => {
    setShowWhiteWineList(false);
    setShowRedWineList(false);
  }, [currentRegion, setShowRedWineList, setShowWhiteWineList]);

  useEffect(() => {
    if (isLogoClicked) {
      toggleM('Espana');
      setIsLogoClicked(false);
    }
  }, [isLogoClicked, setIsLogoClicked, toggleM]);

  useEffect(() => {
    const resize = () => {
      if (window.outerWidth < 960) {
        setMapHeight(null);
        return;
      }
      if (mapRef.current) {
        const height = mapRef.current.clientHeight;
        setMapHeight(height);
      }
    };

    resize();
    window.addEventListener('resize', () => {
      resize();
    });
  }, []);

  return (
    <div className={classes.mapRoot}>
      <Grid container>
        <SwipeableDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.toolbarMargin} />
          <SideCcaaNavigation
            toggleMapas={toggleMapas}
            currentRegion={currentRegion}
            setCurrentRegion={setCurrentRegion}
            mapHeight={mapHeight}
            regionSelected={regionSelected}
          />
        </SwipeableDrawer>
        <Grid
          item
          md={2}
          xs={12}
          className={[classes.hideButtons, classes.marginBottomButton].join(
            ' '
          )}
        >
          <SideCcaaNavigation
            toggleMapas={toggleMapas}
            currentRegion={currentRegion}
            setCurrentRegion={setCurrentRegion}
            mapHeight={mapHeight}
            regionSelected={regionSelected}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <Box
            color="text.primary"
            className={`${classes.mapContainer} ${classes.mapBorderRadius}`}
            ref={mapRef}
          >
            {mapsList.map((map, index) => {
              if (!map.isVisible) {
                return null;
              }

              //'Doble' return 'cos Espana map is the only one getting those props
              if (map.component === EspanaMapa) {
                return (
                  <map.component
                    className={classes.width}
                    src={map.component}
                    onRegionSelected={setCurrentRegion}
                    currentRegion={currentRegion}
                    key={index}
                    toggleMapas={toggleMapas}
                  />
                );
              }

              return (
                <map.component
                  className={classes.width}
                  src={map.component}
                  key={index}
                />
              );
            })}
          </Box>
          <Box className={classes.containerButtons}>
            <Button
              variant="contained"
              className={`${classes.navigationToggler} ${classes.comunidadesStyleBtn}`}
              onClick={() => setOpenDrawer(true)}
            >
              Comunidades
            </Button>
            <Button
              variant="contained"
              className={`${classes.arrowBackStyle} ${classes.notShowArrowBiggerScreens}`}
              onClick={() => toggleMapas('Espana')}
            >
              <ArrowBackIosIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Button
            onClick={() => showRedWines()}
            className={classes.bestWinesSentenceStyle}
          >
            The best red wine from {regionTitle}
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </Grid>

        {showRedWineList &&
          listOfWines
            .filter(
              (item, idx) =>
                (item.region === currentRegion || currentRegion === 'Espana') &&
                item.type === 'red'
            )
            .map((item, idx) => {
              return (
                <Grid item key={idx + item.name}>
                  <CardComponent
                    className={classes.cardStyle}
                    name={item.name}
                    region={item.region}
                    dorigen={item.do}
                    producer={item.producer}
                    type={item.type}
                    variedad={item.variedad}
                    img={item.img}
                    shortDescription={item.shortDescription}
                  />
                </Grid>
              );
            })}
        <Grid item xs={12}>
          <Button
            onClick={() => showWhiteWines()}
            className={classes.bestWinesSentenceStyle}
          >
            The best white wine from {regionTitle}
            <ArrowDropDownIcon fontSize="large" />{' '}
          </Button>
        </Grid>

        {showWhiteWineList &&
          listOfWines
            .filter(
              (item, idx) =>
                (item.region === currentRegion || currentRegion === 'Espana') &&
                item.type === 'white'
            )
            .map((item, idx) => {
              return (
                <Grid item key={idx + item.name}>
                  <CardComponent
                    className={classes.cardStyle}
                    name={item.name}
                    region={item.region}
                    dorigen={item.do}
                    producer={item.producer}
                    type={item.type}
                    variedad={item.variedad}
                    img={item.img}
                    shortDescription={item.shortDescription}
                  />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};

export default Inicio;
