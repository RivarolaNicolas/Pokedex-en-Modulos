/* eslint-disable no-alert */
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export function pedirPokemon(pokemon) {
  return fetch(`${baseURL}${pokemon}`).then((respuesta) => respuesta.json());
}

export function pedirListaPokemon(offset) {
  return fetch(`${baseURL}?limit=10&offset=${offset}`).then((respuesta) =>
    respuesta.json()
  );
}
