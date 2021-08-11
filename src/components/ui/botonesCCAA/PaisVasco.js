import React from 'react';

import Button from '@material-ui/core/Button';

const BotonPaisVasco = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F4A578' }}
    >
      País Vasco
    </Button>
  );
};

export default BotonPaisVasco;
