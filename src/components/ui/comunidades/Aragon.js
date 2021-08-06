import React from 'react';

import Button from '@material-ui/core/Button';

const BotonAragon = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#F5D70C' }}
    >
      Aragón
    </Button>
  );
};

export default BotonAragon;
