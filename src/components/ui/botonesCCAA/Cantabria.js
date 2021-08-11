import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCantabria = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#C6C6C6' }}
    >
      Cantabria
    </Button>
  );
};

export default BotonCantabria;
