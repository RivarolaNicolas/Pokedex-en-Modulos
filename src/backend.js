/* eslint-disable no-console */
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export function pedirPokemon(pokemon) {
  fetch(`${baseURL}${pokemon}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      console.log(respuestaJSON);
      return respuestaJSON;
    });
}

export function llamarAPIListaPokemon(offset) {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
  ).then((respuesta) => respuesta.json());
}
