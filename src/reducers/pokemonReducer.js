import { FETCH_FIRST_POKEMON, FETCH_SECOND_POKEMON, INITIAL_CURRENT_HP, BATTLE_LOGS, FIRST_POKEMON_CURRENT_STATS, SECOND_POKEMON_CURRENT_STATS } from "../constants/actionTypes";

const INITIAL_STATE = {
    firstPokemon: [],
    secondPokemon: [],
    pokemonsHP: { firstPokemonHP: 0, secondPokemonHP: 0 },
    logs: []
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FIRST_POKEMON:
            return { ...state, firstPokemon: action.payload };
        case FETCH_SECOND_POKEMON:
            return { ...state, secondPokemon: action.payload };
        case INITIAL_CURRENT_HP:
        case FIRST_POKEMON_CURRENT_STATS:
        case SECOND_POKEMON_CURRENT_STATS:
            return { ...state, pokemonsHP: { firstPokemonHP: action.payloadFirst, secondPokemonHP: action.payloadSecond } };
        case BATTLE_LOGS:
            return state;
        default:
            return state;
    }
}

export default pokemonReducer;