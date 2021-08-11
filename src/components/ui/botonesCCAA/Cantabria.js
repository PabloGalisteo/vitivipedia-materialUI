import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCantabria = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#D3141A' }}
    >
      Cantabria
    </Button>
  );
};

export default BotonCantabria;
