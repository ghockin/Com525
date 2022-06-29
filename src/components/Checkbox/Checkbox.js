import '../Checkbox/Checkbox.css'
import React, { useState } from "react";
import ReactSwitch from 'react-switch';
import logo from '../logo.png';
import { createContext } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
export const ThemeContext = createContext(null);

function Checkbox() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <header className="App-header">
          <header><h1 id="title">Interaction Design Components</h1> <h2 id="subTitle">Checkbox</h2></header>
          <div id="logo">
            <img src={logo} alt="Logo" />
          </div>
        </header>
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <NavigationBar />
      </div>
    </ThemeContext.Provider>
  );
}

export default Checkbox;
