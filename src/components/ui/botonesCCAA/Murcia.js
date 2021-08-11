import React from 'react';

import Button from '@material-ui/core/Button';

const BotonMurcia = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#961F2B' }}
    >
      Murcia
    </Button>
  );
};

export default BotonMurcia;
