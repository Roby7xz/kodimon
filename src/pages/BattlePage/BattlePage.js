import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Menu from "../../components/Menu/Menu";
import Logs from "../../components/Logs/Logs";
import arrow from "../../assets/arrow.svg";
import { BattlePageStyle } from './BattlePageStyle.styled';
import { getPokemonStats } from '../../actions/pokemons';


const BattlePage = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons.results);
    const pokemonStats = useSelector((state) => state.pokemons.stats);

    const id1 = Math.floor(Math.random() * 20);
    const id2 = Math.floor(Math.random() * 20);

    useEffect(() => {
        dispatch(getPokemonStats(id1));
        dispatch(getPokemonStats(id2));
    }, [dispatch, id1, id2]);

    console.log(pokemons);
    console.log(pokemonStats);

    return (
        <BattlePageStyle>
            <div className="pokemon-battle">
                <PokemonCard name={pokemons[id1].name} />
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
    )
}

export default BattlePage;