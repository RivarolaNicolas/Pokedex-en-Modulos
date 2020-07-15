const baseURL = 'https://pokeapi.co/api/v2/1';

export function pedirPokemon(pokemon) {
  fetch(`${baseURL}+${pokemon}`)
    .then((respuesta) => respuesta.json());
}
