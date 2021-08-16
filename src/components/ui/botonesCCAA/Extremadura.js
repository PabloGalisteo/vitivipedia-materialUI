import React from 'react';

import Button from '@material-ui/core/Button';

const BotonExtremadura = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#C61922', opacity: isActive ? 1 : 0.4 }}
    >
      Extremadura
    </Button>
  );
};

export default BotonExtremadura;
