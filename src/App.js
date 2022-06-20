import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Week1 from '../src/components/week1/week1';
import Week2 from '../src/components/week2/week2';
import HomePage from '../src/components/home/home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/week-1" element={<Week1 />} />
          <Route path="/week-2" element={<Week2 />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
