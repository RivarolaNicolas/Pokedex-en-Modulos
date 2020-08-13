/* eslint-disable prettier/prettier */
import {
  pedirListaPokemon,
  pedirPokemon,
  savePokemonInLocalStorage,
  saveListOfPokemonInLocalStorage,
} from "./backend.js";
import { capitalizarPalabra } from "./helper/helper.js";

const cantidadHabilidadesPokemon = 6;

export async function crearPokemon(pokemon) {
  pokemon = pokemon.toLowerCase();
  const pokemonJSON = await pedirPokemon(pokemon);
  if (localStorage.getItem(pokemon) === null) {
    savePokemonInLocalStorage(pokemon);
  }
  armarPokemon(pokemonJSON);
}

function borrarListaPokemonVieja() {
  $(".listaPokemon").remove();
}

export async function crearListaPokemon(offset) {
  borrarListaPokemonVieja();
  const listaPokemonesJSON = await pedirListaPokemon(offset);
  if (localStorage.getItem(offset) === null) {
    saveListOfPokemonInLocalStorage(offset);
  }
  cambiarListaPokemon(listaPokemonesJSON);
  aniadirOnclickAElementos();
}

$(".ubicacion-grid-00").append(
  `<button class="btn btn-success boton-anterior">Anterior</button>`,
  `<button class="btn btn-success boton-siguiente">Siguiente</button>`,
  `<br/>`
);

function armarPokemon(pokemonJSON) {
  $(".card-img-top").attr("src", `${pokemonJSON.sprites.front_default}`);
  $(".nombre-pokemon").text(capitalizarPalabra(`${pokemonJSON.species.name}`));
  for (let i = 0; i < cantidadHabilidadesPokemon; i++) {
    $(`.habilidad${i}`).text(
      `${pokemonJSON.stats[i].stat.name} + ${pokemonJSON.stats[i].base_stat}`
    );
  }
}

function cambiarListaPokemon(pokemones) {
  pokemones.results.forEach((elemento) => {
    $(".ubicacion-grid-00").append(
      `<button class="btn btn-primary d-flex flex-nowrap border listaPokemon">${capitalizarPalabra(
        elemento.name
      )}</button>`
    );
  });
}

function aniadirOnclickAElementos() {
  const listaPokemon = document.querySelectorAll(".listaPokemon");
  listaPokemon.forEach((pokemon) => {
    pokemon.onclick = () => {
      const pokemonSeleccionado = pokemon.textContent;
      crearPokemon(pokemonSeleccionado);
    };
  });
}
