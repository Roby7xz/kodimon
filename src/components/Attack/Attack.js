import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import arrow from "../../assets/arrow.svg";
import { useDispatch, useSelector } from 'react-redux';
import { initalCurrentHP, setSecondPokemonHP, setFirstPokemonHP, storeBattleLogs } from '../../actions/pokemons';

const Attack = () => {
    const dispatch = useDispatch();
    const firstPokemonStats = useSelector((state) => state.pokemons.firstPokemon);
    const secondPokemonStats = useSelector((state) => state.pokemons.secondPokemon);
    const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);

    // States that are used as flags for some conditions.
    const [direction, setDirection] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;

    // useEffect that on initial render will set current hp of pokemons.
    useEffect(() => {
        if (firstPokemonStats.stats[5].base_stat > secondPokemonStats.stats[5].base_stat) {
            setDirection(true);
        }
        else {
            setDirection(false);
        }

        dispatch(initalCurrentHP(firstPokemonStats.stats[0].base_stat, secondPokemonStats.stats[0].base_stat));
    }, [firstPokemonStats.stats, secondPokemonStats.stats, dispatch]);

    // Function that will calculate damage and it will return it. 
    // Except that, it stores battle logs which we are using inside logs component.
    const damageCalculation = (setAttack, setDefense, setCurrentHP, isFirst, isSecond) => {

        const attack = setAttack / 2;
        const defense = setDefense / 100; //
        const miss = Math.floor(Math.random() * 6);

        var dmgDealt = (attack - attack * defense).toFixed(2);
        var hpDiff = (setCurrentHP - dmgDealt).toFixed(2);

        if (hpDiff < 0) {
            hpDiff = 0;
        }

        if (miss === 1) {
            dmgDealt = 0;
            hpDiff = setCurrentHP;
        }

        dispatch(storeBattleLogs(isFirst, isSecond, firstPokemonStats.name, secondPokemonStats.name, dmgDealt, hpDiff, miss));

        return hpDiff;
    }

    // Called when attack is in progress.
    const attackDisabled = () => {
        setDisabled(true);
        setTimeout(() => { setDisabled(false) }, 1000);
    }

    // When direction is set to true, declaring that the first pokemon will attack
    // and sets up current hp of first pokemon and damage dealt to the second pokemon.
    const firstPokemonAttacks = () => {
        setDirection(false);
        attackDisabled();
        const isFirst = true;
        const isSecond = false;

        const firstPokemonAttack = firstPokemonStats.stats[1]?.base_stat;
        const secondPokemonDefense = secondPokemonStats.stats[2]?.base_stat;

        const damageDealt = damageCalculation(firstPokemonAttack, secondPokemonDefense, secondPokemonHP, isFirst, isSecond);

        dispatch(setSecondPokemonHP(firstPokemonHP, damageDealt));
    }

    // When direction is set to false, declaring that the second pokemon will attack
    // and sets up current hp of first pokemon and damage dealt to the second pokemon.
    const secondPokemonAttacks = () => {
        setDirection(true);
        attackDisabled();
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
            <Button disabled={disabled} onClick={direction ? firstPokemonAttacks : secondPokemonAttacks}>Attack!</Button>
        </>
    )
}

export default Attack;