import * as api from "../api/index";
import { FETCH_POKEMONS, FETCH_POKEMON_STATS } from "../constants/actionTypes";

export const getPokemons = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPokemons();
        dispatch({ type: FETCH_POKEMONS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonStats = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPokemonStats(id);
        dispatch({ type: FETCH_POKEMON_STATS, payload: data });
    } catch (error) {
        console.log(error);
    }
}


