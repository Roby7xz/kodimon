import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import BattlePage from './pages/BattlePage/BattlePage.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/battle" element={<BattlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;