import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCataluna = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#F4D60E' }}
    >
      Cataluña
    </Button>
  );
};

export default BotonCataluna;
