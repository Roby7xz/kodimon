import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPokemons } from './actions/pokemons';

import HomePage from './pages/HomePage/HomePage';
import BattlePage from './pages/BattlePage/BattlePage.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

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