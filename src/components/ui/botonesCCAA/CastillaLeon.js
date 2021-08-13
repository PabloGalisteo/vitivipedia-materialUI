import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLeon = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#712A60', opacity: isActive ? 1 : 0.4 }}
    >
      Castilla y León
    </Button>
  );
};

export default BotonCastillaLeon;
