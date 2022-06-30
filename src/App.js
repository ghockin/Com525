import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/Home';
//Components
import LoginFormApp from './components/LoginForm/LoginFormApp';
import Carousel from './components/ImageSlider/Carousel';
import Checkbox from './components/Checkbox/Checkbox';
import Popup from './components/Popup/Popup';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
        <Routes>
          <Route path="/LoginFormApp" element={<LoginFormApp />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Checkbox" element={<Checkbox />} />
          <Route path="/Popup" element={<Popup />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
