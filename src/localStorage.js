export function storePokemon(pokemon, object) {
  const objectStringified = JSON.stringify(object);
  localStorage.setItem(pokemon, objectStringified);
}

export function fetchPokemon(pokemon) {
  const pokemonLocalStorage = localStorage.getItem(pokemon);
  return JSON.parse(pokemonLocalStorage);
}

export function storePokemonList(offset, object) {
  const objectStringified = JSON.stringify(object);
  localStorage.setItem(offset, objectStringified);
}

export function fetchPokemonList(offset) {
  const offsetLocalStorage = localStorage.getItem(offset);
  return JSON.parse(offsetLocalStorage);
}
