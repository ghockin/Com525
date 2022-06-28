import React from 'react';
import './app.css';
import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul class="no-bullets">
                <li>
                    <Link to="/LoginForm"><h1>Login Form</h1></Link>
                </li>
                <li>
                    <Link to="/NavigationBar"><h1>Navigation Bar</h1></Link>
                </li>
                <li>
                    <Link to="/Notification"><h1>Notifcation</h1></Link>
                </li>
                <li>
                    <Link to="/Checkbox"><h1>Checkbox</h1></Link>
                </li>
                <li>
                    <Link to="/Popup"><h1>Popup</h1></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;