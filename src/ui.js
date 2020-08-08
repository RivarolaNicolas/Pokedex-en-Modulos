/* eslint-disable prettier/prettier */
import { pedirListaPokemon, pedirPokemon } from "./backend.js";

const cantidadHabilidadesPokemon = 6;

function capitalizarPalabra(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

export function crearPokemon(pokemon) {
  pedirPokemon(pokemon.toLowerCase() || pokemon).then((pokemonJSON) => {
    $(".card-img-top").attr("src", `${pokemonJSON.sprites.front_default}`);
    $(".nombre-pokemon").text(
      capitalizarPalabra(`${pokemonJSON.species.name}`)
    );
    for (let i = 0; i < cantidadHabilidadesPokemon; i++) {
      $(`.habilidad${i}`).text(
        `${pokemonJSON.stats[i].stat.name} + ${pokemonJSON.stats[i].base_stat}`
      );
    }
  });
}

function borrarListaPokemonVieja() {
  $(".listaPokemon").remove();
}

export function crearListaPokemon(offset) {
  borrarListaPokemonVieja();
  pedirListaPokemon(offset)
    .then((pokemones) => {
      pokemones.results.forEach((elemento) => {
        $(".ubicacion-grid-00").append(
          `<button class="btn btn-primary d-flex flex-nowrap border listaPokemon">${capitalizarPalabra(
            elemento.name
          )}</button>`
        );
      });
    })
    .then(() => {
      const listaPokemon = document.querySelectorAll(".listaPokemon");
      listaPokemon.forEach((pokemon) => {
        pokemon.onclick = () => {
          const pokemonSeleccionado = pokemon.textContent;
          crearPokemon(pokemonSeleccionado);
        };
      });
    });
}

$(".ubicacion-grid-00").append(
  `<button class="btn btn-success boton-anterior">Anterior</button>`,
  `<button class="btn btn-success boton-siguiente">Siguiente</button>`,
  `<br/>`
);
