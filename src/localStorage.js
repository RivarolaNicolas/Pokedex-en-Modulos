export function storePokemon(pokemon, object) {
  object = JSON.stringify(object);
  localStorage.setItem(pokemon, object);
}

export function fetchPokemon(pokemon) {
  pokemon = localStorage.getItem(pokemon);
  return JSON.parse(pokemon);
}

export function storePokemonList(offset, object) {
  object = JSON.stringify(object);
  localStorage.setItem(offset, object);
}

export function fetchPokemonList(offset) {
  offset = localStorage.getItem(offset);
  return JSON.parse(offset);
}
