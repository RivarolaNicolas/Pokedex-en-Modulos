import defaultExport, { pedirPokemon, paginaAnterior } from "./backend.js";
import { crearListaPokemon, crearPokemon } from "./ui.js";

pedirPokemon("bulbasaur");
crearListaPokemon(10);
crearPokemon(1)

const botonSiguiente = document.querySelector('.boton-siguiente')
const botonAnterior = document.querySelector(".boton-anterior")

botonSiguiente.onclick = () => {
    crearListaPokemon(defaultExport());
  };
  botonAnterior.onclick = () => {
    crearListaPokemon(paginaAnterior());
  };
  