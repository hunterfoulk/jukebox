import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Display.css';

const useStyles = makeStyles(theme => ({
   
  root: {
    flexGrow: 3,
    padding:50,
    textAlign: 'center',
    
  },
  paper: {
    top:20,
    margin:20,
    height: 300,
    width: 280,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.5);',
    color: 'black',
    
  },
  
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item lg={12}>
      <h1>Your Playlist</h1>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3 , 4].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
     
      
      </Grid>
      </Grid>
  
  );
}









