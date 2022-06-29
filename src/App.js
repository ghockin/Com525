import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/Home';
//Components
import LoginForm from './components/LoginForm/LoginForm';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Checkbox from './components/Checkbox/Checkbox';
import Popup from './components/Popup/Popup';
import NavBarDocs from './components/NavigationBar/NavBarDoc';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/NavBarDocs" element={<NavBarDocs />} />
          <Route path="/ImageSlider" element={<ImageSlider />} />
          <Route path="/Checkbox" element={<Checkbox />} />
          <Route path="/Popup" element={<Popup />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
