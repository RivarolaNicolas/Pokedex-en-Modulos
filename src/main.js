import { crearListaPokemon, crearPokemon } from "./ui.js";

let paginador = 0;

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
    return paginador;
  }
  return paginador;
}

botonSiguiente.onclick = () => {
  crearListaPokemon(paginaSiguiente());
};
botonAnterior.onclick = () => {
  crearListaPokemon(paginaAnterior());
};
