import { pedirPokemon, llamarAPIListaPokemon } from "./backend.js";

export default function crearListaPokemon(offset) {
  llamarAPIListaPokemon(offset).then(function (pokemones) {
    pokemones.results.forEach((elemento) => {
      console.log(elemento);
      $(".ubicacion-grid-00").append(
        `<button class="btn btn-primary d-flex flex-nowrap border listaPokemon">${elemento.name}</button>`
      );
    });
  });
}
