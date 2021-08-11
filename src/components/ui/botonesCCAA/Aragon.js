import React from 'react';

import Button from '@material-ui/core/Button';

const BotonAragon = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F84937' }}
    >
      Aragón
    </Button>
  );
};

export default BotonAragon;
