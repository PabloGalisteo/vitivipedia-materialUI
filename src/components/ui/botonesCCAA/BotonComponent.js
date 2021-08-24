import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  buttonRoot: {
    height: '2.4em'
  }
}));

const BotonComponent = ({
  onClick,
  marginButtton,
  isActive,
  title,
  buttonColor,
  hoverButtonList,
  value,
  regionSelected
}) => {
  const classes = styles();
  return (
    <Button
      classes={{ root: classes.buttonRoot }}
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      onMouseEnter={() => hoverButtonList(value)}
      onMouseLeave={() => {
          //if region is selected then don't reset selected region or current region 
          if (regionSelected) {
            return;
          }
          
          hoverButtonList('')
          
        } 
      }
      style={{
        backgroundColor: `${buttonColor}`,
        opacity: isActive ? 0.7 : 1
      }}
    >
      {title}
    </Button>
  );
};

export default BotonComponent;
