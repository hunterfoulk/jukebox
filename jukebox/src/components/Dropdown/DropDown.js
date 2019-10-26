import React from 'react';
import './DropDown.css';



const DropDown = props => (
    <nav className="DropDown">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       <div>
       <input type="text" placeholder="Search.." name="search"></input>  
      <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>


    </nav>
);


export default DropDown;

