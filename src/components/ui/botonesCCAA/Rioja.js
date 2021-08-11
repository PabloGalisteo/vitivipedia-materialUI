import React from 'react';

import Button from '@material-ui/core/Button';

const BotonRioja = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#62B629' }}
    >
      La Rioja
    </Button>
  );
};

export default BotonRioja;
