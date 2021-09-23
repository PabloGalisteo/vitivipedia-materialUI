import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() => ({
  iconButton: {
    color: 'white',
    background: '#333',
    padding: '0.3em',
    marginLeft: '0.5em',

    '&:hover': {
      background: '#000000'
    }
  }
}));

const SocialMediaIcons = ({ title }) => {
  const classes = useStyles();
  const fbRef = useRef();
  const twitterRef = useRef();

  const facebookClickHandler = () => {
    fbRef.current.click();
  };

  const twitterClickHandler = () => {
    twitterRef.current.click();
  };

  const linkedInClickHandler = () => {
    const getIcon = document.querySelector('.IN-widget span button');
    getIcon.click();
  };
  // How to load script tag dinamically in react
  useEffect(() => {
    const lnsrc = document.createElement('script');
    lnsrc.src = 'https://platform.linkedin.com/in.js';
    lnsrc.type = 'text/javascript';
    lnsrc.async = true;

    document.body.appendChild(lnsrc);

    return () => {
      document.body.removeChild(lnsrc);
    };
  }, []);

  return (
    <div>
      <div
        className="fb-share-button"
        data-href={window.location.href}
        data-layout="button"
        data-size="large"
        style={{ display: 'none' }}
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
          rel="noreferrer"
          ref={fbRef}
        >
          facebook
        </a>
      </div>
      <a
        class="twitter-share-button"
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?text=${title}&url=${window.location.href}`}
        data-size="large"
        ref={twitterRef}
        style={{ display: 'none' }}
      >
        Tweet
      </a>

      <script type="IN/Share" data-url={window.location.href}></script>

      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={facebookClickHandler}
      >
        <FacebookIcon fontSize="small" />
      </IconButton>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={twitterClickHandler}
      >
        <TwitterIcon fontSize="small" />
      </IconButton>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={linkedInClickHandler}
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
