import React from "react";
import logo from '../logo.png';
import NavigationBar from "../NavigationBar/NavigationBar";

const Notification = () => {
  return (
    <div className="App">
     <header><h1 id="title">Interaction Design Components</h1> <h2 id="subTitle">Image Slider</h2></header>
     <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
      <NavigationBar />
    </div>
  );
}

export default Notification;
