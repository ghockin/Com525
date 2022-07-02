/* Copyright 2022, Gabriel Hockin, All rights reserved. */

import '../Checkbox/Checkbox.css'
import React, { useState } from "react";
import ReactSwitch from 'react-switch';
import { createContext } from "react";
export const ThemeContext = createContext(null);

function Checkbox() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Checkbox;
