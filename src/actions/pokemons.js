import * as api from "../api/index";
import {
    INITIAL_CURRENT_HP,
    FETCH_FIRST_POKEMON,
    FETCH_SECOND_POKEMON,
    FIRST_POKEMON_CURRENT_STATS,
    SECOND_POKEMON_CURRENT_STATS,
    BATTLE_LOGS,
    CLEAR_LOGS
} from "../constants/actionTypes";

// Fetch first pokemon stats from poke api.
export const fetchFirstPokemon = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFirstPokemon(id + 1);

        dispatch({ type: FETCH_FIRST_POKEMON, payload: data });

    } catch (error) {
        console.log(error);
    }
}

// Fetch second pokemon stats from poke api.
export const fetchSecondPokemon = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSecondPokemon(id + 1);

        dispatch({ type: FETCH_SECOND_POKEMON, payload: data });

    } catch (error) {
        console.log(error);
    }
}

// Action for setting initial HP.
export const initalCurrentHP = (firstPokemonHP, secondPokemonHP) => (dispatch) => {
    dispatch({ type: INITIAL_CURRENT_HP, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP });
}

// Action for setting first HP pokemon after damage.
export const setFirstPokemonHP = (secondPokemonHP, firstPokemonHP) => (dispatch) => {
    dispatch({ type: FIRST_POKEMON_CURRENT_STATS, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP });
}

// Action for setting second HP pokemon  after damage.
export const setSecondPokemonHP = (firstPokemonHP, secondPokemonHP) => (dispatch) => {
    dispatch({ type: SECOND_POKEMON_CURRENT_STATS, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP });
}

// Action for saving all battle logs in logs window.
export const storeBattleLogs = (isFirst, isSecond, firstPokemonName, secondPokemonName, dmgDealt, miss) => (dispatch) => {

    const data = [{
        isFirst: isFirst,
        isSecond: isSecond,
        firstPokemonName: firstPokemonName.charAt(0).toUpperCase() + firstPokemonName.slice(1),
        secondPokemonName: secondPokemonName.charAt(0).toUpperCase() + secondPokemonName.slice(1),
        dmgDealt: dmgDealt,
        miss: miss
    }];

    dispatch({ type: BATTLE_LOGS, payload: data });
}

// Action for clearing old logs.
export const clearLogs = () => (dispatch) => {
    dispatch({ type: CLEAR_LOGS });
}

