import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  cardImage: {
    height: 'auto',
    width: 200,
    [theme.breakpoints.down('sm')]: {
      height: '200px',
      width: '100%',
      objectFit: 'cover'
    }
  }
}));

const ProducerCard = ({
  item,
  producer,
  showSpecificWines,
  selectedProducer,
  setSelectedProducer
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <a
        href="_"
        onClick={e => {
          e.preventDefault();
          if (showSpecificWines) {
            showSpecificWines(item.term_id, producer.category.slug);
            setSelectedProducer(item.term_id);
          }
        }}
      >
        <Card
          style={{
            // display: 'flex',
            marginBottom: '1em',
            border:
              selectedProducer === item.term_id
                ? '1px solid #004874'
                : '1px solid transparent'
          }}
        >
          <Box className={classes.cardContainer}>
            {item.image && (
              <CardMedia
                component="img"
                className={classes.cardImage}
                image={item.image}
                alt={item.name}
              />
            )}
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <Typography variant="h6" component="h6" style={{ flex: 1 }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  style={{
                    fontFamily: 'Roboto',
                    margin: '1em 0'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.description
                  }}
                />

                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '1em'
                  }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/productores/${item.slug}`}
                    onClick={e => {
                      e.stopPropagation();
                      console.log('called');
                    }}
                    style={{ textTransform: 'initial' }}
                  >
                    Más detalles
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </a>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    selectedProducer: state.selectedProducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedProducer: id => dispatch(actions.setSelectedProducer(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducerCard);
