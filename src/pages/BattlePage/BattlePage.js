import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirstPokemon, getSecondPokemon } from "../../actions/pokemons";
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Menu from "../../components/Menu/Menu";
import Logs from "../../components/Logs/Logs";
import { BattlePageStyle } from './BattlePageStyle.styled';
import Attack from '../../components/Attack/Attack';


const BattlePage = () => {
    const dispatch = useDispatch();
    const firstPokemon = useSelector((state) => state.pokemons.firstPokemon);
    const secondPokemon = useSelector((state) => state.pokemons.secondPokemon);
    const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);
    const currentHP1 = useSelector((state) => state.pokemons.pokemonsHP.firstPokemonHP);
    const currentHP2 = useSelector((state) => state.pokemons.pokemonsHP.secondPokemonHP);

    console.log(currentPokemonsHP);
    console.log(currentHP1, currentHP2);

    useEffect(() => {
        const id1 = Math.floor(Math.random() * 20);
        const id2 = Math.floor(Math.random() * 20);

        dispatch(getFirstPokemon(id1));
        dispatch(getSecondPokemon(id2));
    }, [dispatch]);

    if (!firstPokemon.stats || !secondPokemon.stats) {
        return null;
    }

    return (
        <BattlePageStyle>
            <div className="pokemon-battle">
                <PokemonCard
                    name={firstPokemon.name}
                    currentHP={currentPokemonsHP.firstPokemonHP}
                    img={firstPokemon.sprites?.other?.dream_world?.front_default}
                    hp={firstPokemon.stats[0].base_stat}
                    attack={firstPokemon.stats[1].base_stat}
                    defense={firstPokemon.stats[2].base_stat}
                    speed={firstPokemon.stats[5].base_stat}
                />
                <div className="attack-arrow">
                    <Attack currentPokemonsHP={currentPokemonsHP} firstPokemonStats={firstPokemon} secondPokemonStats={secondPokemon} />
                </div>
                <PokemonCard
                    name={secondPokemon.name}
                    currentHP={currentPokemonsHP.secondPokemonHP}
                    img={secondPokemon.sprites?.other?.dream_world?.front_default}
                    hp={secondPokemon.stats[0].base_stat}
                    attack={secondPokemon.stats[1].base_stat}
                    defense={secondPokemon.stats[2].base_stat}
                    speed={secondPokemon.stats[5].base_stat}
                />
            </div>
            <div className="pokemon-menu-logs">
                <Menu />
                <Logs />
            </div>
        </BattlePageStyle>
    )
}

export default BattlePage;