import { crearListaPokemon, crearPokemon } from "./ui.js";
import {
  pedirPokemon as pedirPokemonAPI,
  pedirListaPokemon as pedirListaPokemonAPI,
} from "./api.js";
import {
  pedirPokemon as pedirPokemonLocalStorage,
  pedirListaPokemon as pedirListaPokemonLocalStorage,
  guardarPokemon,
  guardarListaPokemon,
} from "./localStorage.js";

let paginador = 0;

export async function pedirPokemon(pokemon) {
  let pokemonJSON = pedirPokemonLocalStorage(pokemon);
  if (pokemonJSON === null) {
    pokemonJSON = await pedirPokemonAPI(pokemon);
    guardarPokemon(pokemon, pokemonJSON);
  }
  return pokemonJSON;
}

export async function pedirListaPokemon(offset) {
  let listaPokemonJSON = pedirListaPokemonLocalStorage(offset);
  if (listaPokemonJSON === null) {
    listaPokemonJSON = await pedirListaPokemonAPI(offset);
    guardarListaPokemon(offset, listaPokemonJSON);
  }
  return listaPokemonJSON;
}

crearListaPokemon(0);
crearPokemon("bulbasaur");

const botonSiguiente = document.querySelector(".boton-siguiente");
const botonAnterior = document.querySelector(".boton-anterior");

function paginaSiguiente() {
  paginador += 10;
  return paginador;
}

function paginaAnterior() {
  paginador -= 10;
  if (paginador < 0) {
    alert("Estas en el principio de la lista de Pokemones");
    paginador = 0;
  }
  return paginador;
}

botonSiguiente.onclick = () => {
  crearListaPokemon(paginaSiguiente());
};
botonAnterior.onclick = () => {
  crearListaPokemon(paginaAnterior());
};
