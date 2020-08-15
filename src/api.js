/* eslint-disable no-alert */
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export function fetchPokemon(pokemon) {
  return fetch(`${baseURL}${pokemon}`).then((response) => response.json());
}

export function fetchPokemonList(offset) {
  return fetch(`${baseURL}?limit=10&offset=${offset}`).then((response) =>
    response.json()
  );
}
