import React from 'react';

import Button from '@material-ui/core/Button';

const BotonNavarra = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#E61B23' }}
    >
      Navarra
    </Button>
  );
};

export default BotonNavarra;
