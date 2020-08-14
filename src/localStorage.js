export function guardarPokemon(pokemon, objeto) {
  objeto = JSON.stringify(objeto);
  localStorage.setItem(pokemon, objeto);
}

export function pedirPokemon(pokemon) {
  pokemon = localStorage.getItem(pokemon);
  return JSON.parse(pokemon);
}

export function guardarListaPokemon(offset, objeto) {
  objeto = JSON.stringify(objeto);
  localStorage.setItem(offset, objeto);
}

export function pedirListaPokemon(offset) {
  offset = localStorage.getItem(offset);
  return JSON.parse(offset);
}
