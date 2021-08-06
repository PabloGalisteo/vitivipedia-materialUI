import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo.svg';
import { className } from 'postcss-selector-parser';

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '6em',
    marginLeft: '25px'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '25px'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 100,
    marginLeft: '35px'
  },
  menu: {
    backgroundColor: theme.palette.common.blue
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: 'Aprende', link: '/aprende' },
    { name: 'Vino', link: '/vino' },
    { name: 'Destilados', link: '/destilados' },
    { name: 'café', link: '/cafe' }
  ];

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/blog' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/sobre' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/aprende' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contacto' && value !== 4) {
      setValue(4);
    }

    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/aprende':
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      case '/vino':
        if (value !== 3) {
          setValue(1);
        }
        break;
      case '/destilados':
        if (value !== 3) {
          setValue(2);
        }
        break;
      case '/café':
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(3);
        }
        break;
      case '/blog':
        if (value !== 1) {
          setValue(1);
        }
        break;
      case '/sobre':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/contacto':
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img className={classes.logo} alt="vitivipedia logo" src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Inicio"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/blog"
                label="Blog"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/sobre"
                label="Sobre"
              />
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={event => handleClick(event)}
                to="/aprende"
                label="Aprende"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contacto"
                label="Contacto"
              />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={event => {
                    handleMenuItemClick(event, i);
                    setValue(3);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 3}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
