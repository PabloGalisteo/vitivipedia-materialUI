import React from 'react';

import Button from '@material-ui/core/Button';

const BotonIslasBaleares = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#42255F' }}
    >
      Islas Baleares
    </Button>
  );
};

export default BotonIslasBaleares;
