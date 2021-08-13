import React from 'react';

import Button from '@material-ui/core/Button';

const BotonAsturias = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#0162F7', opacity: isActive ? 1 : 0.4 }}
    >
      Asturias
    </Button>
  );
};

export default BotonAsturias;
