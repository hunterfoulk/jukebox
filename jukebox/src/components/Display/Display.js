import React from 'react';
import './Display.css';
import {
   makeStyles, Grid, Card,
   Paper, DialogContentText
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({

   root: {
      flexGrow: 3,
      padding: 50,
      textAlign: 'center',
      backgroundColor: '#d3d3d3',
   },
   card: {
      boxShadow: '0px 5px 10px black;',
      alignItems: 'center',
   },
   head: {
      backgroundColor: 'white',
      color: 'black',
      position: 'relative',
      top: '-15px',
      paddingTop: '50px',
   },
   paper: {
      margin: 20,
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
            <Card className={classes.card}>
               <DialogContentText className={classes.head}><h1>Your Playlist</h1></DialogContentText>
               <Grid container justify="center" spacing={spacing}>
                  {[0, 1, 2, 3, 4].map(value => (
                     <Grid key={value} item>
                        <Paper className={classes.paper} />
                     </Grid>
                  ))}
               </Grid>
            </Card>


         </Grid>
      </Grid>

   );
}