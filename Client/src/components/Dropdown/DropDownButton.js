import React from 'react';
import './DropDownButton.css';

const DropDownButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <span className="toggle-button_line"></span>
        <span className="toggle-button_line"></span>
        <span className="toggle-button_line"></span>
    </button>
);

export default DropDownButton;
