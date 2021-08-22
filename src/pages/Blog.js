import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

// --------- images
import Pablo from '../blog-fotos/pablo.png';
import copaTinto from '../blog-fotos/elaboracionTinto/vino-tinto-botella-copa.jpg';
import copaBlanco from '../blog-fotos/elaboracionBlanco/vino-blanco-botella-copa.jpg';
import copaRosado from '../blog-fotos/elaboracionRosado/vino-rosado-botella-copa.jpg';
import Pisco from '../blog-fotos/elaboracionPisco/pisco_7.jpg';
import Espumoso from '../blog-fotos/espumosoElaboracion/champagne-botella-dibujo.jpg';
import Carbonico from '../blog-fotos/elaboracionCarbonica/elaboracion-carbonica.jpg';
import Poster from '../blog-fotos/poster-viti.jpg';

const useStyles = makeStyles(theme => ({
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  hero: {
    width: '100%',
    height: '100%'
  },
  imgPoster: {
    width: '100%',
    height: '100%',
    marginTop: '-1.7em'
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 240
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  author: {
    display: 'flex'
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <img className={classes.imgPoster} img src={Poster} alt="poster"></img>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Artículos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            {/* First article */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={copaTinto}
                  title="Botella vino tinto y copa"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ¿Cómo se elabora el vino tinto?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Podemos afirmar que el vino tinto es una bebida milenaria,
                    pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos
                    de forma detallada.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar img src={Pablo} alt="Pablo" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pablo Galisteo
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Second article */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={copaBlanco}
                  title="Botella vino blanco y copa"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ¿Cómo se elabora el vino blanco?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Podemos afirmar que el vino tinto es una bebida milenaria,
                    pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos
                    de forma detallada.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar img src={Pablo} alt="Pablo" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pablo Galisteo
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Third article */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={copaRosado}
                  title="Botella vino rosado y copa"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ¿Cómo se elabora el vino rosado?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Podemos afirmar que el vino tinto es una bebida milenaria,
                    pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos
                    de forma detallada.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar img src={Pablo} alt="Pablo" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pablo Galisteo
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Fourth article */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Espumoso}
                  title="Botella champagne"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ¿Cómo se elabora el vino espumoso?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Podemos afirmar que el vino tinto es una bebida milenaria,
                    pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos
                    de forma detallada.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar img src={Pablo} alt="Pablo" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pablo Galisteo
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Fifth article */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Carbonico}
                  title="Fermentación carbónica"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ¿Qué es la fermentación carbónica?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Podemos afirmar que el vino tinto es una bebida milenaria,
                    pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos
                    de forma detallada.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar img src={Pablo} alt="Pablo" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pablo Galisteo
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Sixth article */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Pisco}
                  title="alambique de cobre"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ¿Qué es el pisco y cómo se elabora?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Podemos afirmar que el vino tinto es una bebida milenaria,
                    pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos
                    de forma detallada.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar img src={Pablo} alt="Pablo" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pablo Galisteo
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} shape="rounded" variant="outlined" />
        </Box>
      </Container>
    </div>
  );
};

export default Blog;
