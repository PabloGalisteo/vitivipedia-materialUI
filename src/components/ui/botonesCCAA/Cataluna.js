import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCataluna = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#810E47' }}
    >
      Cataluña
    </Button>
  );
};

export default BotonCataluna;
