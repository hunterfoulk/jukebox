import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Logo from "../login/logo-light.png";
import { useStateValue } from "../../state.js";
import axios from "axios";

import {
  makeStyles,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    color: "white",
    opacity: ".9"
  },
  logo: {
    width: "110px",
    padding: "20px 0px 0px 20px"
  },
  btn: {
    color: "white",
    backgroundColor: "rgb(10, 10, 10, .9)",
    margin: "10px",
    padding: "10px",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "black"
    }
  },
  field: {
    color: "white"
  },
  input: {
    color: "white",
    borderBottom: "1px black solid"
  }
});

export default function RegisterDialog({ open, handleClose }) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, dispatch] = useStateValue();

  const [registerStatus, setRegisterStatus] = useState(
    "Enter a username and password to register."
  );

  async function handleRegister(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/users/signup", {
        username: username,
        password: password
      })
      .then(
        res =>
          console.log(res.data) &
          setRegisterStatus("Account Created, you many now login.")
      )
      .catch(error => console.error(error));
  }

  return (
    <div>
      <form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <div className="login_logo">
            <a href="/">
              <img src={Logo} alt="aa" />
            </a>
          </div>
          <DialogTitle className={classes.root} id="form-dialog-title">
            Register
          </DialogTitle>

          <DialogContent className={classes.root}>
            <DialogContentText className={classes.root}>
              {registerStatus}
            </DialogContentText>
            <TextField
              onChange={e => setUsername(e.target.value)}
              id="name"
              value={username}
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              InputLabelProps={{
                className: classes.field
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              onChange={e => setPassword(e.target.value)}
              id="pass"
              value={password}
              label="Password"
              margin="dense"
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
              onClick={handleRegister}
              color="primary"
            >
              Register Account
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
