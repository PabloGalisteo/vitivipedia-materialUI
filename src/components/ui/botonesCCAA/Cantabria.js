import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCantabria = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#D3141A', opacity: isActive ? 1 : 0.4 }}
    >
      Cantabria
    </Button>
  );
};

export default BotonCantabria;
