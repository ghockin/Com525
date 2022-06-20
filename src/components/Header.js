import React from 'react';
import './app.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul class="no-bullets">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/week-1">Week1</Link>
                </li>
                <li>
                    <Link to="/week-2">Week2</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;