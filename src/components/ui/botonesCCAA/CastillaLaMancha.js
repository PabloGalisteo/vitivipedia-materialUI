import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLaMancha = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#831F36', opacity: isActive ? 1 : 0.4 }}
    >
      Castilla La Mancha
    </Button>
  );
};

export default BotonCastillaLaMancha;
