import React from 'react';
import Button from '@material-ui/core/Button';

const BotonComponent = ({
  onClick,
  marginButtton,
  isActive,
  title,
  buttonColor,
  hoverButtonList, // holds the refrence/address of setCurrentRegion
  value
}) => {
  console.log(buttonColor);
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      onMouseEnter={() => hoverButtonList(value)}
      onMouseLeave={() => hoverButtonList('')}
      style={{
        backgroundColor: `${buttonColor}`,
        opacity: isActive ? 1 : 0.7
      }}
    >
      {title}
    </Button>
  );
};

export default BotonComponent;
