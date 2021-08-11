import React from 'react';

import Button from '@material-ui/core/Button';

const BotonIslasBaleares = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F7D0BE' }}
    >
      Islas Baleares
    </Button>
  );
};

export default BotonIslasBaleares;
