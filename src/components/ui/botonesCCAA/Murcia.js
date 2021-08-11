import React from 'react';

import Button from '@material-ui/core/Button';

const BotonMurcia = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#FF9E1C' }}
    >
      Murcia
    </Button>
  );
};

export default BotonMurcia;
