import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import axios from 'axios';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  imgStyling: {
    height: '5em'
  },
  cardLayout: {
    display: 'flex'
  },
  cardStyling: {
    marginTop: '2em'
  },
  imgContainer: {
    flex: '1 0 20%'
  },
  cardContent: {
    flex: '1 0 80%'
  }
}));

const Productores = () => {
  const [producers, setProducers] = useState([]);
  const classes = useStyles();

  // category => region => parent = 0
  // sub category => producer => parent = some number

  useEffect(() => {
    let isMounted = true;
    const getProducers = async () => {
      const response = await axios.get(
        'https://backend.vitivipedia.com/wp-json/wc/v3/products/categories?per_page=100&consumer_key=ck_1dba763719cb378e99ec68def39b18b16e9cb3c7&consumer_secret=cs_fac9c617b03b9dc71562585a46772f4103585c48'
      );
      const producersData = response.data; // wordpress format
      console.log(producersData);
      if (isMounted) {
        setProducers(producersData);
      }
    };

    getProducers();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      {producers
        .filter(item => item.parent > 0)
        .map(producer => (
          <Card className={classes.cardStyling}>
            <CardContent>
              <div className={classes.cardLayout}>
                {producer.image && (
                  <div className={classes.imgContainer}>
                    <img
                      className={classes.imgStyling}
                      src={producer.image.src}
                      alt={producer.image.alt}
                    />
                  </div>
                )}
                <div className={classes.cardContent}>
                  <Typography variant="h2">{producer.name}</Typography>
                  <Typography variant="body1" component="p">
                    {producer.description}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Productores;
