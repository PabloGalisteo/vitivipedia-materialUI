import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import CardComponent from '../cards/CardComponent';
import winelist from '../../wineList/list';

const FavoriteWines = () => {
  const [favWines, setFavWines] = useState([]);

  useEffect(() => {
    const favList = [];
    winelist.forEach(item => {
      const isWineFav = localStorage.getItem(item.name);
      if (isWineFav) {
        favList.push(item);
      }
    });

    setFavWines(favList);
  }, []);

  return (
    <div style={{ minWidth: '250px', padding: '5.5em 1em 1em 1em' }}>
      {favWines.map((item, idx) => {
        return (
          <Grid item key={idx + item.name}>
            <CardComponent
              name={item.name}
              region={item.region}
              dorigen={item.do}
              producer={item.producer}
              type={item.type}
              variedad={item.variedad}
              img={item.img}
              shortDescription={item.shortDescription}
              showHeart={false}
            />
          </Grid>
        );
      })}
    </div>
  );
};

export default FavoriteWines;
