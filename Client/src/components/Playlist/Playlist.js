import React, { useState, useEffect } from "react";
import "./Playlist.css";
import {
  makeStyles,
  Grid,
  Card,
  Paper,
  DialogContentText
} from "@material-ui/core";
import { useStateValue } from "../../state";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    padding: 50,
    textAlign: "center",
    backgroundColor: "#d3d3d3"
  },
  card: {
    boxShadow: "0px 5px 10px black;",
    alignItems: "center"
  },
  head: {
    backgroundColor: "white",
    color: "black",
    position: "relative",
    top: "-15px",
    paddingTop: "50px"
  },
  paper: {
    margin: 20,
    height: 300,
    width: 280,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.5);",
    color: "black"
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [songs, setSongs] = useState([]);
  const [{ auth }, dispatch] = useStateValue();
  const [loading, isLoading] = useState(false);

  // const Loading = () => <div> Loading </div>;
  var gapi = require("gapi");

  useEffect(() => {
    async function getPlaylist() {
      // isLoading(true);
      await axios
        .get("http://localhost:8080/playlist/getPlaylist", {
          headers: {
            Authorization: "Bearer " + auth.token
          }
        })
        .then(response => {
          // isLoading(false);
          setSongs(response.data.playlist);
          console.log(response.data);
        })
        .catch(error => console.log(error));

      // axios
      //   .get("https://www.googleapis.com/youtube/v3/search", {
      //     part: "snippet",
      //     type: "video",
      //     maxResults: 3,
      //     order: "viewCount",
      //     publishedAfter: "2015-01-01T00:00:00Z"
      //   })
      //   .then(res => console.log(res))
      //   .catch(error => console.log(error));

      //  function authenticate() {
      //    return gapi.auth2
      //      .getAuthInstance()
      //      .signIn({
      //        scope: "https://www.googleapis.com/auth/youtube.force-ssl"
      //      })
      //      .then(
      //        function() {
      //          console.log("Sign-in successful");
      //        },
      //        function(err) {
      //          console.error("Error signing in", err);
      //        }
      //      );
      //  }
      //  function loadClient() {
      //    gapi.client.setApiKey("AIzaSyB8UcJGlEEQXUB2NoIyVWxmEnAclAQfRGw");
      //    return gapi.client
      //      .load(
      //        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
      //      )
      //      .then(
      //        function() {
      //          console.log("GAPI client loaded for API");
      //        },
      //        function(err) {
      //          console.error("Error loading GAPI client for API", err);
      //        }
      //      );https://youtu.be/zJ34ghHGG1w?list=LL7Zyh4_j6BZEZtjnuS-PMOg
      //  }
      // Make sure the client is loaded and sign-in is complete before calling this method.
      // function execute() {
      //   gapi.client.youtube.search
      //     .list({
      //       part: "snippet",
      //       maxResults: 25,
      //       q: "house music"
      //     })
      //     .then(res => console.log(res))
      //     .catch(error => console.log(error));
      // }
      // gapi.load("client:auth2", function () {
      //   gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
      // });
      // execute();
    }

    if (auth.isAuthenticated) getPlaylist();
  }, [auth]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item lg={12}>
        <Card className={classes.card}>
          <DialogContentText className={classes.head}>
            <h1>Your Playlist</h1>
          </DialogContentText>
          <Grid container justify="center" spacing={spacing}>
            {/* <Loadingz /> */}
            {songs.map((song, index) => (
              <Grid key={index} item>
                <Paper className={classes.paper}>{song.link}</Paper>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
