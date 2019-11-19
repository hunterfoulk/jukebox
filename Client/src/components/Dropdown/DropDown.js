import React, { useState } from "react";
import "./DropDown.css";
import {
  Card,
  TextField,
  Button,
  DialogContentText,
  makeStyles
} from "@material-ui/core";
import { useStateValue } from "../../state";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    width: "100%",
    backgroundColor: "black",
    paddingLeft: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  head: {
    margin: "20px 0px 20px 0px ",
    color: "white"
  },
  btn: {
    color: "white",
    backgroundColor: "rgb(15, 15, 15, .9)",
    margin: "30px 0px 20px 0px",
    padding: "0 30px 0 30px",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "black"
    }
  },
  field: {
    color: "white",
    width: "100%"
  },
  input: {
    color: "white",
    borderBottom: "1px black solid"
  }
});

export default function Dropdown() {
  const classes = useStyles();
  const [{ auth }, dispatch] = useStateValue();
  const [link, setLink] = useState("");

  async function handleAddSong(e) {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8080/playlist/addSong",
        {
          link: link
        },
        { headers: { Authorization: "Bearer " + auth.token } }
      )
      .then(res => console.log(res.data))
      .catch(error => console.error(error));
  }

  return (
    <nav className="DropDown">
      <Card className={classes.card}>
        {auth.isAuthenticated ? (
          <DialogContentText className={classes.head}>
            Logged in as: {auth.user.username}
          </DialogContentText>
        ) : (
          <DialogContentText className={classes.head}>
            Login to search songs
          </DialogContentText>
        )}
        <form>
          <TextField
            onChange={e => setLink(e.target.value)}
            type="text"
            autoFocus
            label="Add a Song"
            InputLabelProps={{
              className: classes.field
            }}
            InputProps={{
              className: classes.input
            }}
          />
          <br></br>
          <Button
            onClick={handleAddSong}
            className={classes.btn}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Card>
    </nav>
  );
}
