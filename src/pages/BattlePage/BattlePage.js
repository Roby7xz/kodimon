import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Menu from "../../components/Menu/Menu";
import Logs from "../../components/Logs/Logs";
import arrow from "../../assets/arrow.svg";
import { BattlePageStyle } from './BattlePageStyle.styled';



const BattlePage = ({ id }) => {
    const { id1, id2 } = id;
    const pokemons = useSelector((state) => state.pokemons.pokemonList.results);
    const pokemonStats = useSelector((state) => state.pokemons.pokemonStats.stats);

    console.log(id1, id2);
    console.log(pokemons[id1].name);
    console.log(pokemons[id2].name);

    return (
        <>
            <BattlePageStyle>
                <div className="pokemon-battle">
                    <PokemonCard hp={pokemonStats[0].base_stat} name={pokemons[id1].name} />
                    <div className="attack-arrow">
                        <img src={arrow} alt="Arrow" />
                        <Button>Attack!</Button>
                    </div>
                    <PokemonCard name={pokemons[id2].name} />
                </div>
                <div className="pokemon-menu-logs">
                    <Menu />
                    <Logs />
                </div>
            </BattlePageStyle>
        </>
    )
}

export default BattlePage;