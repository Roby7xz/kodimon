import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import arrow from "../../assets/arrow.svg";
import { useDispatch, useSelector } from 'react-redux';
import { initalCurrentHP, setSecondPokemonHP, setFirstPokemonHP, storeBattleLogs } from '../../actions/pokemons';

const Attack = () => {
    const firstPokemonStats = useSelector((state) => state.pokemons.firstPokemon);
    const secondPokemonStats = useSelector((state) => state.pokemons.secondPokemon);
    const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);

    const dispatch = useDispatch();
    const [direction, setDirection] = useState(false);

    const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;

    useEffect(() => {
        if (firstPokemonStats.stats[5].base_stat > secondPokemonStats.stats[5].base_stat) {
            setDirection(true);
        }
        else {
            setDirection(false);
        }

        dispatch(initalCurrentHP(firstPokemonStats.stats[0].base_stat, secondPokemonStats.stats[0].base_stat));
    }, [firstPokemonStats.stats, secondPokemonStats.stats, dispatch]);

    const damageCalculation = (setAttack, setDefense, setCurrentHP, isFirst, isSecond) => {

        const miss = Math.floor(Math.random() * 6);
        const attack = setAttack / 2;
        const defense = setDefense / 100; //

        const dmgDealt = (attack - attack * defense).toFixed(2);
        var hpDiff = (setCurrentHP - dmgDealt).toFixed(2);


        if (hpDiff < 0) {
            hpDiff = 0;
        }

        dispatch(storeBattleLogs(isFirst, isSecond, firstPokemonStats.name, secondPokemonStats.name, dmgDealt, miss));

        return hpDiff;
    }

    const firstPokemonAttacks = () => {
        setDirection(false);
        const isFirst = true;
        const isSecond = false;

        const firstPokemonAttack = firstPokemonStats.stats[1]?.base_stat;
        const secondPokemonDefense = secondPokemonStats.stats[2]?.base_stat;

        const damageDealt = damageCalculation(firstPokemonAttack, secondPokemonDefense, secondPokemonHP, isFirst, isSecond);

        dispatch(setSecondPokemonHP(firstPokemonHP, damageDealt));
    }

    const secondPokemonAttacks = () => {
        setDirection(true);
        const isFirst = false;
        const isSecond = true;

        const secondPokemonAttack = secondPokemonStats.stats[1]?.base_stat;
        const firstPokemonDefense = firstPokemonStats.stats[2]?.base_stat;

        const damageDealt = damageCalculation(secondPokemonAttack, firstPokemonDefense, firstPokemonHP, isFirst, isSecond);

        dispatch(setFirstPokemonHP(secondPokemonHP, damageDealt));
    }

    return (
        <>
            <img className={`${direction ? "arrow-right" : "arrow-left"}`} src={arrow} alt="Arrow" />
            <Button onClick={direction ? firstPokemonAttacks : secondPokemonAttacks}>Attack!</Button>
        </>
    )
}

export default Attack;