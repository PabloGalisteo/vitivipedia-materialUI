import React from 'react';

import Button from '@material-ui/core/Button';

const BotonEspana = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#A40A17' }}
    >
      España
    </Button>
  );
};

export default BotonEspana;
