import axios from "axios";

// Fetching data from poke api.
const URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchFirstPokemon = (id) => axios.get(`${URL}/${id}`);
export const fetchSecondPokemon = (id) => axios.get(`${URL}/${id}`);