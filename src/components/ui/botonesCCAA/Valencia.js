import React from 'react';

import Button from '@material-ui/core/Button';

const BotonValencia = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#FFC309' }}
    >
      Valencia
    </Button>
  );
};

export default BotonValencia;
