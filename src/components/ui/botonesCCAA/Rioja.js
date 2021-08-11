import React from 'react';

import Button from '@material-ui/core/Button';

const BotonRioja = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#D4F765' }}
    >
      La Rioja
    </Button>
  );
};

export default BotonRioja;
