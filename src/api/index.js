import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon";


export const fetchPokemons = () => axios.get(URL);
export const fetchPokemonStats = (id) => axios.get(`${URL}/${id}`);