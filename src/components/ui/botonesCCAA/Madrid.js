import React from 'react';

import Button from '@material-ui/core/Button';

const BotonMadrid = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#E0925F' }}
    >
      Madrid
    </Button>
  );
};

export default BotonMadrid;
