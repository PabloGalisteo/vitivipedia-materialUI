import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  Button,
  Chip
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import QuantityCounter from './ui/QuantityCounter';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  winecardRoot: {
    margin: '1em',
    overflow: 'hidden'
  },
  wineCardContent: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    marginBottom: theme.spacing(-3)
  },
  wineCardInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
  },
  priceStyling: {
    color: '#dd4433',
    marginLeft: '.5em',
    position: 'relative',
    bottom: '3px'
  },
  buyButtonStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  wineDetailInfo: {
    fontFamily: 'Lora',
    fontWeight: 'bold'
  }
}));

const WineCard = ({ wine }) => {
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState({
    type: null,
    Tamaño: null,
    variedad: null
  });
  console.log(wine);

  useEffect(() => {
    const updatedProductInfo = { ...productInfo };

    wine.meta_data.forEach(meta => {
      if (meta.key === 'type') {
        updatedProductInfo.type = meta.value;
      }
      if (meta.key === 'Tamaño') {
        updatedProductInfo.Tamaño = meta.value;
      }

      if (meta.key === 'variedad') {
        updatedProductInfo.variedad = meta.value;
      }

      if (meta.key === 'do') {
        updatedProductInfo.do = meta.value;
      }
    });
    setProductInfo(updatedProductInfo);
  }, [wine]);

  return (
    <div className={classes.winecardRoot}>
      <Card>
        <CardContent className={classes.wineCardContent}>
          <Grid container>
            <Grid
              item
              style={{ width: '100px', display: 'flex', alignItems: 'center' }}
            >
              <img
                src={wine.image}
                alt={wine.name}
                style={{
                  width: '100px',
                  height: '178px',
                  objectFit: 'contain'
                }}
              />
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Box className={classes.wineCardInfo}>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ fontFamily: 'Lora', fontWeight: 'bold' }}
                >
                  {wine.name}
                </Typography>

                <Box>
                  {productInfo.Tamaño && (
                    <Typography
                      style={{
                        color: '#999',
                        fontSize: '0.9em',
                        marginBottom: '1em'
                      }}
                    >
                      Botella de {productInfo.Tamaño}
                    </Typography>
                  )}
                  {productInfo.do && (
                    <Typography>
                      <span className={classes.wineDetailInfo}>D.O:</span>{' '}
                      <Chip label={productInfo.do} size="small" />
                    </Typography>
                  )}
                  {productInfo.type && (
                    <Typography>
                      <span className={classes.wineDetailInfo}>
                        Tipo de vino:
                      </span>{' '}
                      <Chip label={productInfo.type} size="small" />
                    </Typography>
                  )}
                  {productInfo.variedad && (
                    <Typography>
                      <span className={classes.wineDetailInfo}>Variedad:</span>{' '}
                      <Chip label={productInfo.variedad} size="small" />
                    </Typography>
                  )}
                  <Typography>
                    <span className={classes.wineDetailInfo}>
                      Número de botellas:
                    </span>{' '}
                    <Chip label={wine.stock_quantity} size="small" />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} style={{ padding: '1em' }}>
              <Divider style={{ marginTop: '0.7em', marginBottom: '0.7em' }} />
              <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
                {wine.price && (
                  <Typography variant="h4" component="h4">
                    {wine.price}€
                  </Typography>
                )}
                {wine.price === wine.sale_price && (
                  <Typography
                    className={classes.priceStyling}
                    variant="h6"
                    component="h6"
                  >
                    <del>{wine.regular_price}€ </del>
                  </Typography>
                )}
              </Box>
              <Box className={classes.buyButtonStyle}>
                <QuantityCounter wineStock={wine.stock_quantity} />
                <Box>
                  <Button
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                    style={{
                      height: '2.75em',
                      backgroundColor: '#004874',
                      color: 'white',
                      textTransform: 'initial'
                    }}
                  >
                    Añadir al carrito
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WineCard;
