import React from 'react';

import Button from '@material-ui/core/Button';

const BotonNavarra = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F9DA3B' }}
    >
      Navarra
    </Button>
  );
};

export default BotonNavarra;
