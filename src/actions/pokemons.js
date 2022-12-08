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


export const getFirstPokemon = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFirstPokemon(id + 1);


        dispatch({ type: FETCH_FIRST_POKEMON, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const getSecondPokemon = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSecondPokemon(id + 1);

        dispatch({ type: FETCH_SECOND_POKEMON, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const initalCurrentHP = (firstPokemonHP, secondPokemonHP) => (dispatch) => {

    dispatch({ type: INITIAL_CURRENT_HP, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP });
}

export const setFirstPokemonHP = (secondPokemonHP, firstPokemonHP) => (dispatch) => {
    dispatch({ type: FIRST_POKEMON_CURRENT_STATS, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP });
}

export const setSecondPokemonHP = (firstPokemonHP, secondPokemonHP) => (dispatch) => {
    dispatch({ type: SECOND_POKEMON_CURRENT_STATS, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP });
}

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

export const clearLogs = () => (dispatch) => {
    dispatch({ type: CLEAR_LOGS });
}

