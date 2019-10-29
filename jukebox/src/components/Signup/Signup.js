import React from 'react';
import Button from '@material-ui/core/Button';
import Logo from '../login/logo-light.png';
import {
  makeStyles, TextField, Dialog, DialogContent,
  DialogTitle, DialogContentText, DialogActions
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    color: 'white',
    opacity: '.9',
  },
  logo: {
    width: '110px',
    padding: '20px 0px 0px 20px',
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

export default function RegisterDialog({ open, handleClose }) {
  const classes = useStyles();

  return (
    <div>


      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div className="login_logo"><a href="/"><img src={Logo} alt="aa" /></a></div>
        <DialogTitle className={classes.root} id="form-dialog-title">Register</DialogTitle>

        <DialogContent className={classes.root}>
          <DialogContentText className={classes.root}>
            Please enter your Username and Password to register.
          </DialogContentText>
          <TextField
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
          <Button
            className={classes.btn}
            onClick={handleClose}
            color="primary">
            Register Account
          </Button>
        </DialogActions>
      </Dialog>
    </div >

  );
}