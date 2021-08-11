import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLeon = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#9A2525' }}
    >
      Castilla y León
    </Button>
  );
};

export default BotonCastillaLeon;
