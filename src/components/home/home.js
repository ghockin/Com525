import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import './home.css'
import logo from '../logo.png'

const Home = () => {
  return (
    <div className="App">
      <header><h1 id="title">Interaction Design Components</h1> <h2 id="subTitle">By Gabe Hockin</h2></header>

      <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
      <NavigationBar />
    </div>
  );
}

export default Home;
