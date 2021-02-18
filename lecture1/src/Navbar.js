// @flow strict

import * as React from 'react';

const Navbar= ()=> {
    return (
    <div className = "box">
      <nav>
        {/* label logo */}
        <input type = "checkbox" id ="check">
      </input>


        <label class = "logo">Webpage</label>


        <ul>

          <li><a class = "active" href ="#">Home</a></li>
          <li><a href ="#"> About</a></li>
          <li><a href ="#"> page1</a></li>
          <li><a href ="#"> page2</a></li>

            
        </ul>
      </nav>
      

    </div>

    );
};

export default Navbar;