import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paperStyle: {
    padding: '2em',
    marginBottom: '2em'
  },
  textFieldStyle: {
    marginRight: '1em'
  },
  buttonStyle: {
    backgroundColor: '#EEEEEE',
    margin: '0.5em',
    '&:hover': {
      backgroundColor: '#f78550'
    }
  }
}));

const SubsPanel = () => {
  const classes = useStyles();
  const [getEmail, setGetEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const subscribe = () => {
    const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(getEmail);

    if (!valid) {
      setSnackMessage('Email inválido');
      setSnackbarOpen(true);
      return;
    }
    axios
      .post('https://api.vitivipedia.com/api/subscribe', {
        email: getEmail
      })
      .then(res => {
        setSnackMessage('Te has suscrito a Vitivipedia');
        setSnackbarOpen(true);
        setGetEmail('');
      })
      .catch(err => {
        setSnackMessage('Hay algún error. Vuelve a intentarlo por favor.');
        setSnackbarOpen(true);
        setGetEmail('');
      });
  };

  return (
    <div>
      <Paper className={classes.paperStyle}>
        <form noValidate autoComplete="off" style={{ display: 'flex' }}>
          <TextField
            className={classes.textFieldStyle}
            onInput={e => setGetEmail(e.target.value)}
            value={getEmail}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="dense"
          />
          <Button onClick={subscribe} className={classes.buttonStyle}>
            Suscríbete
          </Button>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={3000}
        message={snackMessage}
      />
    </div>
  );
};

export default SubsPanel;
