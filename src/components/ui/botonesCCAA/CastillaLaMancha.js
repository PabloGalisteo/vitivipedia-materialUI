import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLaMancha = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#EC6B15' }}
    >
      Castilla La Mancha
    </Button>
  );
};

export default BotonCastillaLaMancha;
