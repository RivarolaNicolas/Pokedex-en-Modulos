/* eslint-disable prettier/prettier */
import { fetchPokemon, fetchPokemonList, previousPage, nextPage } from './servicio.js';
import { capitalizeWord } from './helper/helper.js';

const AMOUNT_OF_POKEMON_ABILITIES = 6;
export function initialize() {
  createPokemonList(0);
  renderPokemon('bulbasaur');
}

export async function renderPokemon(pokemonName) {
  const pokemonLowerCase = pokemonName.toLowerCase();
  const pokemon = await fetchPokemon(pokemonLowerCase);
  buildPokemon(pokemon);
}

function deletePokemonList() {
  $('.pokemon-list').remove();
}

export async function createPokemonList(offset) {
  deletePokemonList();
  const pokemonListJSON = await fetchPokemonList(offset);

  renderPokemonList(pokemonListJSON);
  setupPokemonEventHandler();
}

$('.location-grid-00').append(
  `<button class="btn btn-success previos-page-button">Previous</button>`,
  `<button class="btn btn-success next-page-button">Next</button>`,
  `<br/>`
);

function buildPokemon(pokemonJSON) {
  $('.card-img-top').attr('src', `${pokemonJSON.sprites.front_default}`);
  $('.pokemon-name').text(capitalizeWord(`${pokemonJSON.species.name}`));
  for (let i = 0; i < AMOUNT_OF_POKEMON_ABILITIES; i++) {
    $(`.ability${i}`).text(`${pokemonJSON.stats[i].stat.name} + ${pokemonJSON.stats[i].base_stat}`);
  }
}

function renderPokemonList(pokemonList) {
  pokemonList.results.forEach((element) => {
    $('.location-grid-00').append(
      `<button class="btn btn-primary d-flex flex-nowrap border pokemon-list">${capitalizeWord(
        element.name
      )}</button>`
    );
  });
}

function setupPokemonEventHandler() {
  const pokemonList = document.querySelectorAll('.pokemon-list');
  pokemonList.forEach((pokemon) => {
    const pokemonElement = pokemon;
    pokemonElement.onclick = () => {
      const chosenPokemon = pokemon.textContent;
      renderPokemon(chosenPokemon);
    };
  });
}
const nextPageButton = document.querySelector('.next-page-button');
const previousPageButton = document.querySelector('.previos-page-button');

nextPageButton.onclick = () => {
  createPokemonList(nextPage());
};
previousPageButton.onclick = () => {
  createPokemonList(previousPage());
};
