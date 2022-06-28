import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/home/home';
//Components
import LoginForm from './components/LoginForm/LoginForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Notification from './components/Notification/Notification';
import Checkbox from './components/Checkbox/Checkbox';
import Popup from './components/Popup/Popup';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/NavigationBar" element={<NavigationBar />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Checkbox" element={<Checkbox />} />
          <Route path="/Popup" element={<Popup />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
