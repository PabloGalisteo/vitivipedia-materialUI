import React from 'react';

import Button from '@material-ui/core/Button';

const BotonGalicia = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#780014' }}
    >
      Galicia
    </Button>
  );
};

export default BotonGalicia;
