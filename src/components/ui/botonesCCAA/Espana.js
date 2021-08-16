import React from 'react';

import Button from '@material-ui/core/Button';

const BotonEspana = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#A40A17', opacity: isActive ? 1 : 0.4 }}
    >
      España
    </Button>
  );
};

export default BotonEspana;
