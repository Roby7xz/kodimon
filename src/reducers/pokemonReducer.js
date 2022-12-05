import { FETCH_POKEMONS, FETCH_POKEMON_STATS } from "../constants/actionTypes";

const INITIAL_STATE = {
    pokemonList: {},
    pokemonStats: {}
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return { ...state, pokemonList: action.payload };
        case FETCH_POKEMON_STATS:
            return { ...state, pokemonStats: action.payload };
        default:
            return state;
    }
}

export default pokemonReducer;