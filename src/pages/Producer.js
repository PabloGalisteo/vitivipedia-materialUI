import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import WineCard from '../components/WineCard';

const useStyles = makeStyles(theme => ({
  heroStyling: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundSize: '',
    height: '600px',
    backgroundPosition: 'center'
  },
  sectionContainer: {
    paddingTop: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0
  }
}));

const Producer = () => {
  const { name } = useParams();
  const [producerData, setProducerData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const getProducerData = async () => {
      const response = await axios.get(
        `https://backend.vitivipedia.com/wp-json/vitivipedia/v1/category/${name.toLowerCase()}`
      );
      const data = response.data; // wordpress format
      setProducerData(data);
    };

    getProducerData();
  }, [name]);

  return (
    <div style={{ marginTop: '-2em' }}>
      {producerData && (
        <>
          <Grid container>
            <Grid
              item
              xs={12}
              className={classes.heroStyling}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${producerData.image}) no-repeat`,
                backgroundSize: 'cover'
              }}
            >
              <Typography variant="h3" component="h3">
                {producerData.name}
              </Typography>
              <Typography variant="body1" component="p">
                {producerData.description}
              </Typography>
            </Grid>
          </Grid>
          <Container maxWidth="lg" className={classes.sectionContainer}>
            <Grid container>
              <Grid item xs={12} md={4}>
                {producerData.products.map(prod => (
                  <WineCard wine={prod} />
                ))}
                {producerData.products.length === 0 && (
                  <Typography variant="h4" component="h4">
                    Este elaborador no tiene productos disponibles en este
                    momento.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} md={8}>
                <h2>producer intro</h2>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Producer;
