import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLeon = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#712A60' }}
    >
      Castilla y León
    </Button>
  );
};

export default BotonCastillaLeon;
