import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import EspanaMapa from '../mapas/España.js';

import FavoriteWines from '../components/ui/FavoriteWines.js';

// --------- icons ---------- //
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SideCcaaNavigation from '../components/ui/SideCcaaNavigation';
import CardComponent from '../components/cards/CardComponent';

import inicialMapList from '../components/mapList';
import winelist from '../wineList/list';

import useStyles from './Inicio.styles';

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
  const [clickedRegion, setClickedRegion] = useState('Espana');
  const [size, setSize] = useState(0);
  const [isFavOpen, setIsFavOpen] = useState(false);

  const classes = useStyles();
  const mapRef = useRef();

  const toggleMapas = (mapName, isClicked) => {
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

    if (mapName === 'Espana') {
      setRegionSelected(false);
    } else {
      setRegionSelected(true);
    }

    if (isClicked) {
      setClickedRegion(mapName);
    } else {
      setClickedRegion('Espana');
    }
  };

  //function to swap the list of wines

  const showRedWines = e => {
    // First we target parent button
    const button = e.target.closest('button');

    if (showRedWineList) {
      setShowRedWineList(false);
      // Here we remove css class
      button.classList.remove('wineBtnActive');
    } else {
      setShowRedWineList(true);
      button.classList.add('wineBtnActive');
    }
  };

  const showWhiteWines = e => {
    const button = e.target.closest('button');

    console.log(showWhiteWineList);
    if (showWhiteWineList) {
      setShowWhiteWineList(false);
      button.classList.remove('wineBtnActive');
    } else {
      setShowWhiteWineList(true);
      button.classList.add('wineBtnActive');
    }
  };

  const toggleM = toggleMapas;

  useEffect(() => {
    if (isLogoClicked) {
      toggleM('Espana');
      setIsLogoClicked(false);
    }
  }, [isLogoClicked, setIsLogoClicked, toggleM]);

  // useEffect to get real time size of map component
  useEffect(() => {
    const resize = () => {
      setSize(window.outerWidth);

      if (window.outerWidth < 960) {
        setMapHeight(null);
        return;
      }
      if (mapRef.current) {
        const height = mapRef.current.clientHeight;
        setMapHeight(height);
      }
    };

    setTimeout(() => {
      resize();
    }, 100);
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

              let svgMap = (
                <map.component
                  className={classes.width}
                  src={map.component}
                  key={index}
                />
              );
              if (size <= 768) {
                svgMap = (
                  <TransformWrapper>
                    <TransformComponent>
                      <map.component
                        className={[classes.width, classes.mapHeight].join(' ')}
                        src={map.component}
                        key={index}
                      />
                    </TransformComponent>
                  </TransformWrapper>
                );
              }
              return svgMap;
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
      <Grid container className={classes.bestWineContainer}>
        <Grid item xs={12} className={classes.favBtn}>
          <Button
            onClick={e => setIsFavOpen(true)}
            className={classes.favBtnStyle}
            style={{ textTransform: 'none' }}
          >
            <span>Vinos favoritos</span>
            <ArrowDropDownIcon fontSize="small" />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={e => showRedWines(e)}
            className={classes.bestWinesSentenceStyle}
            style={{ textTransform: 'none' }}
          >
            Los mejores vinos tintos de {regionTitle}
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </Grid>

        {showRedWineList &&
          listOfWines
            .filter(
              (item, idx) =>
                (item.region === clickedRegion || clickedRegion === 'Espana') &&
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
                    showHeart={true}
                    href={item.href}
                  />
                </Grid>
              );
            })}
        <Grid item xs={12}>
          <Button
            onClick={e => showWhiteWines(e)}
            className={classes.bestWinesSentenceStyle}
            style={{ textTransform: 'none' }}
          >
            Los mejores vinos blancos de {regionTitle}
            <ArrowDropDownIcon fontSize="large" />{' '}
          </Button>
        </Grid>

        {showWhiteWineList &&
          listOfWines
            .filter(
              (item, idx) =>
                (item.region === clickedRegion || clickedRegion === 'Espana') &&
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
                    showHeart={true}
                    href={item.href}
                  />
                </Grid>
              );
            })}
      </Grid>
      <SwipeableDrawer
        anchor="right"
        open={isFavOpen}
        onClose={() => setIsFavOpen(false)}
      >
        <FavoriteWines />
      </SwipeableDrawer>
    </div>
  );
};

export default Inicio;
