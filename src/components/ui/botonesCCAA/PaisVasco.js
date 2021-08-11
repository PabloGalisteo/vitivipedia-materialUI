import React from 'react';

import Button from '@material-ui/core/Button';

const BotonPaisVasco = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#009645' }}
    >
      País Vasco
    </Button>
  );
};

export default BotonPaisVasco;
