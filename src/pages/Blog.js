import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
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
import articlesList from '../components/articlesList';
import SubsPanel from '../components/ui/SubsPanel';
import Pablo from '../blog-fotos/pablo.png';

// --------- images

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
    marginTop: '-1.7em'
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    color: '#000'
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
  },
  styleCard: {
    textDecoration: 'none',
    color: 'inherit',
    textDecorationColor: 'inherit'
  },
  titleSubsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  }
}));

const Blog = () => {
  const classes = useStyles();
  //const pageUrl = useLocation().search.;
  const location = useLocation();
  const history = useHistory();
  const search = location.search;

  let pageVal = 1;

  // ?page=1 || ''
  if (search.length > 0) {
    //?page=20&test=20
    const query = search.substr(1, search.length);
    const queryArr = query.split('&').map(item => {
      return {
        prop: item.split('=')[0],
        val: parseInt(item.split('=')[1])
      };
    });
    const pageProp = queryArr.find(item => item.prop === 'page');
    pageVal = pageProp.val;
  }

  // http://localhost:3000/blog?page=1

  // const [blogData, setBlogData] = useState([...articlesList].reverse());
  const [blogData, setBlogData] = useState([]);
  const [page, setPage] = useState(pageVal);
  const [articlePerPage] = useState(6);

  const getTotalPages = () => {
    let totalPages = blogData.length / articlePerPage; // 1
    let remainder = blogData.length % articlePerPage; // 1

    if (remainder > 0) {
      return Math.floor(totalPages) + 1;
    }
    return Math.floor(totalPages);
  };

  const getPosts = async () => {
    const response = await axios.get(
      'http://backend.vitivipedia.com/wp-json/wp/v2/posts'
    );
    const posts = response.data; // wordpress format
    const updatedPosts = []; // our format

    posts.forEach(async post => {
      if (post.featured_media === 0) {
        updatedPosts.push({
          title: post.title.rendered,
          content: post.content.rendered,
          route: '/blog/' + post.slug,
          avatar: Pablo,
          img: 'asdfasf',
          author:
            'http://backend.vitivipedia.com/wp-json/wp/v2/users/' + post.author
        });
        return;
      }
      const res = await axios.get(
        'http://backend.vitivipedia.com/wp-json/wp/v2/media/' +
          post.featured_media
      );
      const imgData = res.data;
      updatedPosts.push({
        title: post.title.rendered,
        content: post.content.rendered,
        route: '/blog/' + post.slug,
        avatar: Pablo,
        img: imgData.guid.rendered,
        author:
          'http://backend.vitivipedia.com/wp-json/wp/v2/users/' + post.author
      });
    });

    console.log('updatedPost', updatedPosts);
    setBlogData(updatedPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (location.search.length > 0) {
      //?page=20&test=20
      const query = location.search.substr(1, location.search.length);
      const queryArr = query.split('&').map(item => {
        return {
          prop: item.split('=')[0],
          val: parseInt(item.split('=')[1])
        };
      });
      const pageProp = queryArr.find(item => item.prop === 'page');
      setPage(pageProp.val);
    }
  }, [location]);

  const getPageArticles = articles => {
    const start = (page - 1) * articlePerPage + 1; // 1
    let end = start + articlePerPage;
    const updatedArticles = [...articles];

    const pageArticles = updatedArticles.slice(start - 1, end - 1);
    return pageArticles;
  };

  const reorgenizeArticles = articles => {
    // we need to seperate bookmarked and not bookmarked

    const bookmarkedArticles = articles.filter(
      (item, index) => item.bookmarked
    );

    const notBookmarkedArticles = articles.filter(
      (item, index) => !item.bookmarked
    );

    if (bookmarkedArticles.length === 0) {
      return [...articlesList].reverse();
    } else {
      return [...bookmarkedArticles, ...notBookmarkedArticles];
    }
  };

  // useEffect(() => {
  //   let updatedBlogData = blogData.map(item => {
  //     if (localStorage.getItem(item.title)) {
  //       return {
  //         ...item,
  //         bookmarked: true
  //       };
  //     }
  //     return item;
  //   });
  //   const updatedData = reorgenizeArticles(updatedBlogData);
  //   setBlogData(updatedData);
  // }, []);

  const toggleBookMarked = item => {
    // toogle bookmark
    // 1 - either add or remove item from local storage
    // 2 - update blogData state and set item bookmarked true or false
    if (item.bookmarked) {
      localStorage.removeItem(item.title);
    } else {
      localStorage.setItem(item.title, true);
    }

    let updatedBlogData = [...blogData];

    const index = updatedBlogData.findIndex(i => i.title === item.title);

    console.log(index);
    updatedBlogData[index].bookmarked = !item.bookmarked ? true : false;
    const updatedData = reorgenizeArticles(updatedBlogData);
    setBlogData(updatedData);
  };

  return (
    <div>
      <Box className={classes.hero}>
        <img
          className={classes.imgPoster}
          src={Poster.toString()}
          alt="poster"
        />
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid item className={classes.titleSubsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Artículos
          </Typography>
          <SubsPanel />
        </Grid>

        <Grid container spacing={3}>
          {
            //getPageArticles(blogData).map((item, idx) => (
            blogData.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={item.title + idx}>
                <Link to={item.route} style={{ textDecoration: 'none' }}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.img.toString()}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Avatar
                          img
                          src={item.avatar && item.avatar.toString()}
                          alt="Pablo"
                        />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            {item.author}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <BookmarkBorderIcon
                          style={{ color: item.bookmarked ? 'red' : 'gray' }}
                          onClick={e => {
                            toggleBookMarked(item);
                            e.stopPropagation();
                            e.preventDefault();
                          }}
                        />
                      </Box>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))
          }
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination
            count={getTotalPages()}
            page={page}
            shape="rounded"
            variant="outlined"
            onChange={(e, value) => {
              history.push(location.pathname + '?page=' + value);
            }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Blog;
