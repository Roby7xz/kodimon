import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFirstPokemon, fetchSecondPokemon, clearLogs } from "../../actions/pokemons";
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Menu from "../../components/Menu/Menu";
import Logs from "../../components/Logs/Logs";
import Attack from '../../components/Attack/Attack';
import MenuModal from '../../components/MenuModal/MenuModal';
import { BattlePageStyle } from './BattlePageStyle.styled';


const BattlePage = () => {
    const dispatch = useDispatch();

    // Using useSelector hook to extract data from the Redux store (pokemon stats).
    const firstPokemon = useSelector((state) => state.pokemons.firstPokemon); 
    const secondPokemon = useSelector((state) => state.pokemons.secondPokemon);
    const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);

    // Usage of this constant is explained down below.
    const dead = currentPokemonsHP.firstPokemonHP === 0 || currentPokemonsHP.secondPokemonHP === 0;


    // useEffect hook to fetch data on first render and log clearing with dispatch hook.
    useEffect(() => {
        const id1 = Math.floor(Math.random() * 20);
        const id2 = Math.floor(Math.random() * 20);

        dispatch(fetchFirstPokemon(id1));
        dispatch(fetchSecondPokemon(id2));
        dispatch(clearLogs());
    }, [dispatch]);

    // If statement that check if pokemons stats existing.
    if (!firstPokemon.stats || !secondPokemon.stats) {
        return null;
    }

    return (
        <BattlePageStyle>
            <div className="pokemon-battle">
                <PokemonCard
                    name={firstPokemon.name.charAt(0).toUpperCase() + firstPokemon.name.slice(1)}
                    currentHP={currentPokemonsHP.firstPokemonHP}
                    img={firstPokemon.sprites?.other?.dream_world?.front_default}
                    hp={firstPokemon.stats[0].base_stat}
                    attack={firstPokemon.stats[1].base_stat}
                    defense={firstPokemon.stats[2].base_stat}
                    speed={firstPokemon.stats[5].base_stat}
                />
                <div className="attack-arrow">
                    <Attack />
                </div>
                <PokemonCard
                    name={secondPokemon.name.charAt(0).toUpperCase() + secondPokemon.name.slice(1)}
                    currentHP={currentPokemonsHP.secondPokemonHP}
                    img={secondPokemon.sprites?.other?.dream_world?.front_default}
                    hp={secondPokemon.stats[0].base_stat}
                    attack={secondPokemon.stats[1].base_stat}
                    defense={secondPokemon.stats[2].base_stat}
                    speed={secondPokemon.stats[5].base_stat}
                />
            </div>
            <div className="pokemon-menu-logs">
                {// const dead which is used for conditional rendering of menu modal when game is finished.
                    dead ? <MenuModal /> : (
                        <div className="menu-battle">
                            <Menu />
                        </div>
                    )
                }
                {/* const dead is used here for conditional rendering for styles when game is finished. */}
                <div className={`${dead ? "logs-battle-finished" : "logs-battle"}`}>
                    <Logs />
                </div>
            </div>
        </BattlePageStyle>
    )
}

export default BattlePage;