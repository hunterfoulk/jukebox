import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Navbar/logo.png';
import DropDownButton from '../Dropdown/DropDownButton';
import DropDown from '../Dropdown/DropDown';
import Backdrop from '../Backdrop/Backdrop';
import FormDialog from '../login/loginModal';
import Signup from '../Signup/Signup';
import { Button, makeStyles } from '@material-ui/core';

function Navbar() {


    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    }

    const [loginOpen, setLoginOpen] = React.useState(false);

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const [registerOpen, setRegisterOpen] = React.useState(false);

    const handleRegisterOpen = () => {
        setRegisterOpen(true);
    };

    const handleRegisterClose = () => {
        setRegisterOpen(false);
    };

    const useStyles = makeStyles(theme => ({
        button: {
            color: 'white',
            marginRight: '15px',
        },
    }));

    const classes = useStyles();
    return (
        <>
            {dropDownOpen && <DropDown />}
            {dropDownOpen && <Backdrop click={toggleDropDown} />}
            <header className="navbar">
                <nav className="navbar_navigation">
                    <div>
                        <DropDownButton click={toggleDropDown} />
                    </div>
                    <div className="navbar_logo"><a href="/"><img src={Logo} alt="aa" /></a></div>
                    <div className="navbar_spacer" />
                    <div className="navbar_navigation_items">

                        <Button className={classes.button} onClick={handleLoginOpen}>Login</Button>
                        <Button className={classes.button} onClick={handleRegisterOpen}>Sign up</Button>

                        <FormDialog open={loginOpen} handleClose={handleLoginClose} />
                        <Signup open={registerOpen} handleClose={handleRegisterClose} />


                    </div>

                </nav>
            </header>
        </>);

};


export default Navbar;