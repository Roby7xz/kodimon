import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import { MenuModalStyle } from './MenuModalStyle.styled';

const MenuModal = () => {

  const firstPokemon = useSelector((state) => state.pokemons.firstPokemon);
  const secondPokemon = useSelector((state) => state.pokemons.secondPokemon);
  const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);

  const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;

  const firstWin = <h2 className="won-title">{`${firstPokemon.name.charAt(0).toUpperCase() + firstPokemon.name.slice(1)} WON!`}</h2>;
  const secondWin = <h2 className="won-title">{`${secondPokemon.name.charAt(0).toUpperCase() + secondPokemon.name.slice(1)} WON!`}</h2>

  return (
    <>
      <MenuModalStyle>
        {
          firstPokemonHP === 0 ? secondWin : null
        }
        {
          secondPokemonHP === 0 ? firstWin : null
        }
        <Menu />
      </MenuModalStyle>
    </>


  )
}

export default MenuModal;