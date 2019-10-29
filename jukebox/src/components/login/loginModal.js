import React from 'react';
import './loginModal.css';
import Logo from '../login/logo-light.png';
import {
  Button, TextField, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    opacity: '.9',
    color: 'white',
  },
  btn: {
    color: 'white',
    backgroundColor: 'rgb(10, 10, 10, .9)',
    margin: '10px',
    padding: '10px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: 'black',
    }
  },
  field: {
    color: 'white',
  },
  input: {
    color: "white",
    borderBottom: '1px black solid',
  }
});

export default function FormDialog({ open, handleClose }) {
  const classes = useStyles();


  return (
    <div>


      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div className="login_logo"><a href="/"><img src={Logo} alt="aa" /></a></div>
        <DialogTitle className={classes.root} id="form-dialog-title">Login</DialogTitle>

        <DialogContent className={classes.root}>
          <DialogContentText className={classes.root}>
            Please enter your Username and Password to login.
          </DialogContentText>
          <TextField
            className={classes.field}
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="email"
            fullWidth
            InputLabelProps={{
              className: classes.field
            }}
            InputProps={{
              className: classes.input
            }}
          />
          <TextField
            className={classes.field}
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            InputLabelProps={{
              className: classes.field
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </DialogContent>

        <DialogActions className={classes.root}>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            forgot password?
          </Button>

          <Button className={classes.btn} onClick={handleClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div >

  );
}
