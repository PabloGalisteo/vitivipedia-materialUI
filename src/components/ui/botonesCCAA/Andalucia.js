import React from 'react';
import Button from '@material-ui/core/Button';

const BotonAndalucia = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#E84A28' }}
    >
      Andalucía
    </Button>
  );
};

export default BotonAndalucia;
