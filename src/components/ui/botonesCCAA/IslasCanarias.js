import React from 'react';

import Button from '@material-ui/core/Button';

const BotonIslasCanarias = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#E9C123' }}
    >
      Islas Canarias
    </Button>
  );
};

export default BotonIslasCanarias;
