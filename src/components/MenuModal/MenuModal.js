import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import { MenuModalStyle } from './MenuModalStyle.styled';

const MenuModal = () => {

  const firstPokemon = useSelector((state) => state.pokemons.firstPokemon);
  const secondPokemon = useSelector((state) => state.pokemons.secondPokemon);
  const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);

  // Destructing currentPokemonsHP object.
  const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;

  // Constants used for displaying winner.
  const firstWin = <h1 className="won-title">{`${firstPokemon.name.charAt(0).toUpperCase() + firstPokemon.name.slice(1)} WON!`}</h1>;
  const secondWin = <h1 className="won-title">{`${secondPokemon.name.charAt(0).toUpperCase() + secondPokemon.name.slice(1)} WON!`}</h1>

  return (
    <>
      <MenuModalStyle>
        { // Display that second pokemon won.
          firstPokemonHP === 0 ? secondWin : null
        }
        { // Display that first pokemon won.
          secondPokemonHP === 0 ? firstWin : null
        }
        <Menu />
      </MenuModalStyle>
    </>


  )
}

export default MenuModal;