import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Signup.css';

export default function RegisterDialog({open, handleClose}) {


  return (
    <div>
      
    
     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please Create a Username and Password to Sign up.
          </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirm Password"
            type="email"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          
          <Button onClick={handleClose} color="primary">
            Sign up!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}