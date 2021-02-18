// @flow strict

import * as React from 'react';
import { Dropdown, DropdownButton,  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class newButton extends React.Component {
    render() {
        return (
            <div class = "navbar">
            <label class = "logo">Webpage</label>
                <div class ="container">
                <a href = "#home">Home</a>
                <a href = "#news">News</a>
               
            <div class="dropdown">
                    <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
                    </button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div> 
            
                
                </div>

            </div>
        
          
        );
    }
}

export default newButton;