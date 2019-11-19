import React, { useState } from "react";
import "./loginModal.css";
import { useStateValue } from "../../state";
import Logo from "../login/logo-light.png";
import axios from "axios";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    opacity: ".9",
    color: "white"
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

export default function FormDialog({ open, handleClose }) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, dispatch] = useStateValue();

  const [loginStatus, setLoginStatus] = useState(
    "Enter a username and passord to login."
  );

  async function handleLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/login", {
        username: username,
        password: password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({
          type: "login",
          auth: {
            isAuthenticated: true,
            token: res.data.token,
            user: res.data.user
          }
        });
        console.log(res.data);

        handleClose();
        // axios
        //   .get("/users/protected", {
        //     headers: { Authorization: "Bearer " + res.data.token }
        //   })
        //   .then(res => console.log(res));
      })
      .catch(() => setLoginStatus("Invalid username or password"));
  }

  return (
    <div>
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
          Login
        </DialogTitle>

        <DialogContent className={classes.root}>
          <DialogContentText className={classes.root}>
            {loginStatus}
          </DialogContentText>
          <TextField
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={classes.field}
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            autoComplete="off"
            fullWidth
            InputLabelProps={{
              className: classes.field
            }}
            InputProps={{
              className: classes.input
            }}
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={classes.field}
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            autoComplete="off"
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
          <Button className={classes.btn} onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
