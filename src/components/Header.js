import React from "react";


//lets make a header
// h1 name passes prop


const Header = ({ name }) =>{
    return (
      <header>
        <h1>{name}</h1>
      </header>
    );
  }
  

export default Header;

