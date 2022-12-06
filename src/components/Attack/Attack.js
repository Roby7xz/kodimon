import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import arrow from "../../assets/arrow.svg";
import { useDispatch } from 'react-redux';
import { initalCurrentHP, setSecondPokemonHP, setFirstPokemonHP } from '../../actions/pokemons';

const Attack = ({ firstPokemonStats, secondPokemonStats, currentPokemonsHP }) => {
    const dispatch = useDispatch();
    const [direction, setDirection] = useState(false);

    const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;

    console.log(firstPokemonHP, secondPokemonHP);
    useEffect(() => {
        if (firstPokemonStats.stats[5].base_stat > secondPokemonStats.stats[5].base_stat) {
            setDirection(true);
        }
        else {
            setDirection(false);
        }
        dispatch(initalCurrentHP(firstPokemonStats.stats[0].base_stat, secondPokemonStats.stats[0].base_stat));
    }, [firstPokemonStats.stats, secondPokemonStats.stats, dispatch]);

    const firstPokemonAttack = () => {
        setDirection(false);

        const miss = Math.floor(Math.random() * 6);
        const attack1 = firstPokemonStats.stats[1]?.base_stat / 2;
        const defense2 = secondPokemonStats.stats[2]?.base_stat;

        let dmg = attack1 - attack1 * (defense2 / 100);
        let dmgToHP = parseFloat(secondPokemonHP - dmg).toFixed(2);

        if (dmgToHP < 0) {
            dmgToHP = 0;
        }
        if (miss === 1) {
            dmg = 0;
        }
        dispatch(setSecondPokemonHP(firstPokemonHP, dmgToHP));
    }

    const secondPokemonAttacks = () => {
        setDirection(true);

        const miss = Math.floor(Math.random() * 6);
        const attack2 = secondPokemonStats.stats[1]?.base_stat / 2;
        const defense1 = firstPokemonStats.stats[2]?.base_stat;

        let dmg = attack2 - attack2 * (defense1 / 100);
        let dmgToHP = parseFloat(firstPokemonHP - dmg).toFixed(2);

        if (dmgToHP < 0) {
            dmgToHP = 0;
        }

        if (miss === 1) {
            dmg = 0;
        }

        dispatch(setFirstPokemonHP(secondPokemonHP, dmgToHP));
    }

    return (
        <>
            <img className={`${direction ? "arrow-right" : "arrow-left"}`} src={arrow} alt="Arrow" />
            <Button onClick={direction ? firstPokemonAttack : secondPokemonAttacks}>Attack!</Button>
        </>
    )
}

export default Attack;