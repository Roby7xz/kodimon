import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPokemons, getPokemonStats } from './actions/pokemons';
import HomePage from './pages/HomePage/HomePage';
import BattlePage from './pages/BattlePage/BattlePage.js';


const App = () => {
  const [id, setId] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const id1 = Math.floor(Math.random() * 20);
    const id2 = Math.floor(Math.random() * 20);

    setId({ id1: id1, id2: id2 });

    dispatch(getPokemons());
    dispatch(getPokemonStats(id1));
    dispatch(getPokemonStats(id2));

  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/battle" element={<BattlePage id={id} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;