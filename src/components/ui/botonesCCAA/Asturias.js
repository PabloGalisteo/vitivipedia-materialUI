import React from 'react';

import Button from '@material-ui/core/Button';

const BotonAsturias = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#0162F7' }}
    >
      Asturias
    </Button>
  );
};

export default BotonAsturias;
