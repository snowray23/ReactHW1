import React from 'react';
import me from './images/me.jpg';

const Header = ()=> {
    return (
      <header className="Header">
        <img src={me} alt="Raymond Zheng" />
        <h1>Introduction</h1>
      </header>
    );
  };
  
  export default Header;