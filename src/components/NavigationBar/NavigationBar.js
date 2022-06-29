import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='NavApp'>
      <div className='Sidebar'>
        <ul className='SidebarList'>
          <li className='row'>
            <Link to="/"><br /><h2>Home</h2></Link>
          </li>
          <li className='row'>
            <Link to="/LoginForm"><br /><h2>Login Form</h2></Link>
          </li>
          <li className='row'>
            <Link to="/NavBarDocs"><br /><h2>NavigationBar</h2></Link>
          </li>
          <li className='row'>
            <Link to="/ImageSlider"><br /><h2>ImageSlider</h2></Link>
          </li>
          <li className='row'>
            <Link to="/Checkbox"><br /><h2>Checkbox</h2></Link>
          </li>
          <li className='row'>
            <Link to="/Popup"><br /><h2>Popup</h2></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;