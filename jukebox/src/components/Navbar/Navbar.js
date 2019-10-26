import React, {useState} from 'react';
import DropDownButton from '../Dropdown/DropDownButton';
import DropDown from '../Dropdown/DropDown';
import './Navbar.css';
import Logo from '../Navbar/logo.png';
import Backdrop from '../Backdrop/Backdrop';
import FormDialog from '../login/loginModal';
import Link from '@material-ui/core/Link';
import Signup from '../Signup/Signup';



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

    return (
        <>
            {dropDownOpen && <DropDown />}
            {dropDownOpen && <Backdrop click={toggleDropDown}/>}
            <header className="navbar">
                <nav className="navbar_navigation">
                <div>
                    <DropDownButton click={toggleDropDown} />
                </div>
                <div className="navbar_logo"><a href="/"><img src={Logo} alt="aa"/></a></div>
                <div className="navbar_spacer" />
                <div className="navbar_navigation_items">
            
                <Link disabled className="Links" color = 'primary' onClick={handleLoginOpen}>
                    Login
                </Link>

                <Link disabled className="Links" color = 'primary' onClick={handleRegisterOpen}>
                    Sign up
                </Link>
                    
                <FormDialog open={loginOpen} handleClose={handleLoginClose} />
                <Signup open={registerOpen} handleClose={handleRegisterClose} />
                    
               
                </div>

                </nav>
            </header>
        </>);

};


export default Navbar;