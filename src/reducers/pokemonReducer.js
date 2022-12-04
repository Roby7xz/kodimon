import { FETCH_POKEMONS, FETCH_POKEMON_STATS } from "../constants/actionTypes";

const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return action.payload;
        case FETCH_POKEMON_STATS:
            return action.payload;
        default:
            return state;
    }
}

export default pokemonReducer;