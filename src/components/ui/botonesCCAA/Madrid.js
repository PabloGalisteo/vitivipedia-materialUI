import React from 'react';

import Button from '@material-ui/core/Button';

const BotonMadrid = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#C00C1E' }}
    >
      Madrid
    </Button>
  );
};

export default BotonMadrid;
