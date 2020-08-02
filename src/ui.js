/* eslint-disable import/no-named-as-default */
import { llamarAPIListaPokemon } from "./backend.js";

export function crearPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((pokemon) => pokemon.json())
    .then((pokemonJSON) => {
      $('.card-img-top').attr('src', `${pokemonJSON.sprites.front_default}`);
      $('.nombre-pokemon').text(
        `${
          pokemonJSON.species.name.charAt(0).toUpperCase()
          + pokemonJSON.species.name.substr(1).toLowerCase()
        }`,
      );
      for (let i = 0; i < 6; i++) {
        $(`.habilidad${i}`).text(
          `${pokemonJSON.stats[i].stat.name} + ${pokemonJSON.stats[i].base_stat}`,
        );
      }
    });
}
function borrarListaPokemonVieja() {
  $('.listaPokemon').remove();
}

export function crearListaPokemon(offset) {
  borrarListaPokemonVieja();
  llamarAPIListaPokemon(offset).then(function(pokemones) {
    pokemones.results.forEach((elemento) => {
      console.log(elemento);
      $(".ubicacion-grid-00").append(
        `<button class="btn btn-primary d-flex flex-nowrap border listaPokemon">${elemento.name}</button>`
      );
    });
  }).then(() => {
    const listaPokemon = document.querySelectorAll('.listaPokemon');
    listaPokemon.forEach((pokemon) => {
      pokemon.onclick = () => {
        const pokemonSeleccionado = pokemon.textContent;
        crearPokemon(pokemonSeleccionado);
  };
})})}


