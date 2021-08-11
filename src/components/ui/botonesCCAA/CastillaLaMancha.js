import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLaMancha = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#831F36' }}
    >
      Castilla La Mancha
    </Button>
  );
};

export default BotonCastillaLaMancha;
