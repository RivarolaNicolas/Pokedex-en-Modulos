import {
  fetchPokemon as fetchPokemonAPI,
  fetchPokemonList as fetchPokemonListAPI,
} from "./api.js";
import {
  fetchPokemon as fetchPokemonLocalStorage,
  fetchPokemonList as fetchPokemonListLocalStorage,
  storePokemon,
  storePokemonList,
} from "./localStorage.js";
import { initialize } from "./ui.js";

initialize();

let offset = 0;

export async function fetchPokemon(pokemon) {
  let pokemonJSON = fetchPokemonLocalStorage(pokemon);
  if (pokemonJSON === null) {
    pokemonJSON = await fetchPokemonAPI(pokemon);
    storePokemon(pokemon, pokemonJSON);
  }
  return pokemonJSON;
}

export async function fetchPokemonList(offset) {
  let pokemonListJSON = fetchPokemonListLocalStorage(offset);
  if (pokemonListJSON === null) {
    pokemonListJSON = await fetchPokemonListAPI(offset);
    storePokemonList(offset, pokemonListJSON);
  }
  return pokemonListJSON;
}

export function nextPage() {
  offset += 10;
  return offset;
}

export function previousPage() {
  offset -= 10;
  if (offset < 0) {
    alert("You are at the beginning of the pokemon list");
    offset = 0;
  }
  return offset;
}
