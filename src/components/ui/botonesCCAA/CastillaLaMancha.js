import React from 'react';

import Button from '@material-ui/core/Button';

const BotonCastillaLaMancha = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#EC6B15', opacity: isActive ? 1 : 0.4 }}
    >
      Castilla La Mancha
    </Button>
  );
};

export default BotonCastillaLaMancha;
