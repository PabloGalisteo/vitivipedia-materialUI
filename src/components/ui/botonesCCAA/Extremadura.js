import React from 'react';

import Button from '@material-ui/core/Button';

const BotonExtremadura = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#066F37' }}
    >
      Extremadura
    </Button>
  );
};

export default BotonExtremadura;
