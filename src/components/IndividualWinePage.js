import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  Typography
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import WineInfo from './ui/WineInfo';
import QuantityCounter from './ui/QuantityCounter';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import actions from '../store/actions';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  containerStyle: {},
  spinner: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainCardStyle: {
    width: '100%'
  },
  imgStyling: {
    padding: '3em',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      height: '400px'
    }
  },
  ActionButtons: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '1.5em'
    }
  },
  cartBtn: {
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  }
}));

const IndividualWinePage = ({
  products,
  addToCart,
  removeFromCart,
  cart,
  updateServerCart,
  user
}) => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [err, setErr] = useState({ show: false, message: '' });
  const classes = useStyles();

  useEffect(() => {
    const slug = location.pathname.split('/')[2];
    const index = products.findIndex(prod => prod.slug === slug);
    console.log(index);
    if (index >= 0) {
      setProduct(products[index]);
    }
  }, [location.pathname, products]);

  const gridImage = prod => {
    return (
      <div className={classes.imgStyling}>
        <img src={prod.img} alt={prod.name} />
      </div>
    );
  };

  const cartClickHandler = () => {
    const updatedProduct = { ...product };
    updatedProduct.quantity = quantity;

    const cartProductIndex = cart.findIndex(
      item => item.id === updatedProduct.id
    );
    let updatedQuantity = quantity;

    if (cartProductIndex !== -1) {
      updatedQuantity += cart[cartProductIndex].quantity;
    }

    if (updatedQuantity > updatedProduct.stock) {
      setErr({ show: true, message: 'No hay suficiente stock' });
      return;
    }

    updateServerCart(updatedProduct, products, user.token);
  };

  const productInfo = prod => {
    return (
      <Grid container style={{ padding: '2em 1em 1em 3em' }}>
        <Grid item xs={12}>
          <Typography component="h4" variant="h4">
            {prod.name}
          </Typography>
          <WineInfo
            Tamaño={prod.Tamaño}
            type={prod.type}
            variedad={prod.variedad}
            description={prod.description}
            stock={prod.stock}
            dorigen={prod.dorigen}
          />
          <Box className={classes.ActionButtons}>
            <QuantityCounter
              wineStock={prod.stock}
              onChange={setQuantity}
              quantity={quantity}
            />
            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              onClick={cartClickHandler}
              style={{
                height: '2.75em',
                backgroundColor: '#004874',
                color: 'white',
                textTransform: 'initial',
                marginRight: '1em',

                marginBottom: '0.6em'
              }}
              className={classes.cartBtn}
            >
              Añadir al carrito
            </Button>
            <Button
              variant="outlined"
              style={{
                height: '2.75em',
                backgroundColor: '#B25B58',
                color: 'white',
                textTransform: 'initial',
                marginRight: '1em',
                marginBottom: '0.6em'
              }}
            >
              Comprar
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.containerStyle}>
      <Container>
        <Card className={classes.mainCardStyle}>
          {product ? (
            <Grid container>
              <Grid item xs={12} md={3}>
                {gridImage(product)}
              </Grid>
              <Grid item xs={12} md={9}>
                {productInfo(product)}
              </Grid>
            </Grid>
          ) : (
            <div className={classes.spinner}>
              <CircularProgress />
            </div>
          )}
        </Card>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box style={{ flex: 1 }}>
              <Typography>Ficha Técnica</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={err.show}
        message={err.message}
        ContentProps={{ style: { backgroundColor: '#004874' } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setErr({ show: false, message: '' })}
        autoHideDuration={2000}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(actions.addToCart(product)),
    removeFromCart: product => dispatch(actions.removeFromCart(product)),
    updateServerCart: (updatedProduct, products, token) =>
      dispatch(actions.updateServerCart(updatedProduct, products, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualWinePage);
