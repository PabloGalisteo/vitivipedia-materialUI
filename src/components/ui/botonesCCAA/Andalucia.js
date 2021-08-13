import React from 'react';
import Button from '@material-ui/core/Button';

const BotonAndalucia = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#016025', opacity: isActive ? 1 : 0.4  }}
    >
      Andalucía
    </Button>
  );
};

export default BotonAndalucia;
