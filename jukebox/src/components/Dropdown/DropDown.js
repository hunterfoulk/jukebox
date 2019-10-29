import React from 'react';
import './DropDown.css';
import {
    Card, Slide, TextField, Button,
    DialogContentText, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '100%',
        backgroundColor: 'black',
        paddingLeft: '10px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    head: {
        margin: '20px 0px 20px 0px ',
        color: 'white',
    },
    btn: {
        color: 'white',
        backgroundColor: 'rgb(15, 15, 15, .9)',
        margin: '30px 0px 20px 0px',
        padding: '0 30px 0 30px',
        borderRadius: '3px',
        '&:hover': {
            backgroundColor: 'black',
        }
    },
    field: {
        color: 'white',
        width: '100%',
    },
    input: {
        color: "white",
        borderBottom: '1px black solid',
    }
});

export default function Dropdown() {
    const classes = useStyles();

    return (
        <nav className="DropDown">
            <Card className={classes.card}>
                <DialogContentText className={classes.head}>
                    Logged in as: {}
                </DialogContentText>
                <TextField
                    type="text"
                    autoFocus
                    label="Search a Song"
                    InputLabelProps={{
                        className: classes.field
                    }}
                    InputProps={{
                        className: classes.input
                    }}
                />
                <br></br>
                <Button
                    className={classes.btn}
                    variant="contained"
                    type="submit">
                    Submit
            </Button>
            </Card>
        </nav >
    );
}
