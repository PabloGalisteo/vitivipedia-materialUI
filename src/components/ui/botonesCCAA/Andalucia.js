import React from 'react';
import Button from '@material-ui/core/Button';

const BotonAndalucia = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#016025' }}
    >
      Andalucía
    </Button>
  );
};

export default BotonAndalucia;
