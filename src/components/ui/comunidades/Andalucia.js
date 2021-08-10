import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  btnRoot: {
    borderRadius: 0
  }
}));

// const MyButton = withStyles((theme) => ({
//   root: {
//     background: 'blue',
//   },
//   text: {
//     color: 'white'
//   }

// }))(Button);




const BotonAndalucia = ({ onClick }) => {
  const classes = useStyles();
  return (
    <>
    {/* <MyButton>Test</MyButton> */}
    <Button
      classes={ { root: classes.btnRoot }}
      onClick={onClick}
      variant="contained"
      style={{ backgroundColor: '#016025' }}
    >
      Andalucía
    </Button>
    </>
  );
};

export default BotonAndalucia;
