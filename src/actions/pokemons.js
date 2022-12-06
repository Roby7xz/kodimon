import * as api from "../api/index";
import { INITIAL_CURRENT_HP, FETCH_FIRST_POKEMON, FETCH_SECOND_POKEMON, FIRST_POKEMON_CURRENT_STATS, SECOND_POKEMON_CURRENT_STATS } from "../constants/actionTypes";


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

export const initalCurrentHP = (firstPokemonHP, secondPokemonHP) => {
    return { type: INITIAL_CURRENT_HP, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP };
}

export const setFirstPokemonHP = (secondPokemonHP, firstPokemonHP) => {
    return { type: FIRST_POKEMON_CURRENT_STATS, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP };
}

export const setSecondPokemonHP = (firstPokemonHP, secondPokemonHP) => {
    return { type: SECOND_POKEMON_CURRENT_STATS, payloadFirst: firstPokemonHP, payloadSecond: secondPokemonHP };
}

