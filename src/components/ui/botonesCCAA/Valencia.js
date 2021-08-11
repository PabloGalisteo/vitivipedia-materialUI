import React from 'react';

import Button from '@material-ui/core/Button';

const BotonValencia = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#0255B4' }}
    >
      Valencia
    </Button>
  );
};

export default BotonValencia;
