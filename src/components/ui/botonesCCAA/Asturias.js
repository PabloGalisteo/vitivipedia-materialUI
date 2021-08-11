import React from 'react';

import Button from '@material-ui/core/Button';

const BotonAsturias = ({ onClick, marginButtton }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#991945' }}
    >
      Asturias
    </Button>
  );
};

export default BotonAsturias;
