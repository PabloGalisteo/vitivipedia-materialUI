import React from 'react';

import Button from '@material-ui/core/Button';

const BotonExtremadura = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#C61922' }}
    >
      Extremadura
    </Button>
  );
};

export default BotonExtremadura;
