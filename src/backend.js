/* eslint-disable no-console */
const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let paginador = 0

export function pedirPokemon(pokemon) {
  return fetch(`${baseURL}${pokemon}`).then((respuesta) => respuesta.json());
}

export function llamarAPIListaPokemon(offset) {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
  ).then((respuesta) => respuesta.json());
}




export default function paginaSiguiente(){
	paginador += 10
	return paginador
}

export function paginaAnterior() {
  paginador -= 10;
  if (paginador < 0) {
    alert('Estas en el principio de la lista de Pokemones');
    paginador = 0;
    return paginador;
  }
  return paginador;
}