import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirstPokemon, fetchSecondPokemon, clearLogs, setSecondPokemonHP, setFirstPokemonHP } from '../../actions/pokemons';
import Button from '../Button/Button';
import { MenuStyle } from './MenuStyle.styled';

const Menu = () => {
    const dispatch = useDispatch();
    const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);
    const firstPokemonBaseHP = useSelector((state) => state.pokemons.firstPokemon.stats[0].base_stat);
    const secondPokemonBaseHP = useSelector((state) => state.pokemons.secondPokemon.stats[0].base_stat);

    const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;
    const id1 = Math.floor(Math.random() * 20);
    const id2 = Math.floor(Math.random() * 20);

    const newGame = () => {
        dispatch(fetchFirstPokemon(id1));
        dispatch(fetchSecondPokemon(id2));
        dispatch(clearLogs());
    }

    const newOpponent = () => {

        if (firstPokemonHP === 0) {
            dispatch(fetchFirstPokemon(id1));
            dispatch(setSecondPokemonHP(secondPokemonBaseHP, firstPokemonBaseHP));
        }

        else if (secondPokemonHP === 0) {
            dispatch(fetchSecondPokemon(id2));
            dispatch(setFirstPokemonHP(firstPokemonBaseHP, secondPokemonBaseHP));
        }

        else if (firstPokemonHP > secondPokemonHP) {
            dispatch(fetchSecondPokemon(id2));
            dispatch(setFirstPokemonHP(secondPokemonBaseHP, firstPokemonBaseHP));
        }

        else if (firstPokemonHP < secondPokemonHP) {
            dispatch(fetchFirstPokemon(id1));
            dispatch(setSecondPokemonHP(firstPokemonBaseHP, secondPokemonBaseHP));
        }
    }

    return (
        <MenuStyle>
            <h6>Menu</h6>
            <div className="menu">
                <Button route="/">Home</Button>
                <Button onClick={newGame} route="/battle">New Game</Button>
                <Button onClick={newOpponent} route="/battle">New oponnent</Button>
            </div>
        </MenuStyle>
    );
}

export default Menu;