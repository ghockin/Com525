import React from 'react';
import '../home/home.css'
import NavigationBar from "../NavigationBar/NavigationBar";
import logo from '../logo.png'

// purely for documentation
function NavBarDocs() {
  return (
    <div className="App">
      <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
      <header>
        <h1 id="title">Interaction Design Components</h1> <h2 id="subTitle">Navigation Bar</h2>
      </header>
      <NavigationBar />
    </div>
  );
}

export default NavBarDocs;