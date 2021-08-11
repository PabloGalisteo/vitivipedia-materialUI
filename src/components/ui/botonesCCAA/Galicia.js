import React from 'react';

import Button from '@material-ui/core/Button';

const BotonGalicia = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#0395C7' }}
    >
      Galicia
    </Button>
  );
};

export default BotonGalicia;
