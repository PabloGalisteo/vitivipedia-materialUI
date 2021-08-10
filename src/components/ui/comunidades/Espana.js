import React from 'react';

import Button from '@material-ui/core/Button';

const BotonEspana = ({onClick}) => {
  return (
    <Button onClick={onClick} variant="contained" style={{ backgroundColor: '#A40A17' }}>
      España
    </Button>
  );
};

export default BotonEspana;
