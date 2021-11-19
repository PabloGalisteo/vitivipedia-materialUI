import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';

import actions from '../store/actions';

import WineModal from './WineModal';

const useStyles = makeStyles(theme => ({
  cardComponentroot: {
    maxWidth: 345,
    margin: '0.5em',
    paddingBottom: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginRight: '0',
      maxWidth: '100%'
    }
  },
  cardLink: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  imgStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  media: {
    height: '20em'
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#E65B5B',
      color: '#fff'
    }
  }
}));

const RegionContainerWineCard = ({
  wineData,
  name,
  region,
  dorigen,
  producer,
  type,
  variedad,
  img,
  shortDescription,
  description,
  showHeart,
  href,
  fevoriteWineList,
  saveFavWines,
  Tamaño,
  stock
}) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      localStorage.removeItem(name);
      const newList = fevoriteWineList.filter(
        item => item.name !== wineData.name
      );

      setIsFavorite(false);
      saveFavWines(newList);
    } else {
      localStorage.setItem(name, true);
      const newList = [...fevoriteWineList];
      newList.push(wineData);
      saveFavWines(newList);
      setIsFavorite(true);
    }
  };

  return (
    <>
      <a
        href="_"
        className={classes.cardLink}
        onClick={e => {
          e.preventDefault();
          setModalOpen(true);
        }}
      >
        <Card className={classes.cardComponentroot}>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="subtitle1"
              style={{ padding: '10px', fontWeight: 'bold', color: '#666' }}
            >
              {name}
            </Typography>
            {showHeart && (
              <IconButton
                aria-label="add to favorites"
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleFavorite();
                }}
              >
                <FavoriteIcon style={{ color: isFavorite ? 'red' : 'gray' }} />
              </IconButton>
            )}
          </Box>
          <Box className={classes.imgStyle}>
            <img className={classes.media} src={img} alt={name} />
          </Box>
        </Card>
      </a>
      {modalOpen && (
        <WineModal
          slug={wineData.slug}
          open={modalOpen}
          onClose={setModalOpen}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    fevoriteWineList: state.fevoriteWineList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFavWines: data => dispatch(actions.saveFevoriteWines(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionContainerWineCard);
