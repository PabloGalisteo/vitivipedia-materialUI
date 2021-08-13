import React from 'react';

import Button from '@material-ui/core/Button';

const BotonAragon = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#F5D70C', opacity: isActive ? 1 : 0.4 }}
    >
      Aragón
    </Button>
  );
};

export default BotonAragon;
