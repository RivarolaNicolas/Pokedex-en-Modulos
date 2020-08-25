/// <reference types="cypress" />
/* eslint-disable no-undef */
const URL = "127.0.0.1:8080";

describe("Basic testing of the Pokedex", () => {
  it("opens the pokedex", () => {
    cy.visit(URL);
  });
  it("loads bulbasaur by default", () => {
    cy.get(".pokemon-name").should("have.text", "Bulbasaur");
  });
  it("goes forward and backwards in the list of pokemons", () => {
    cy.get(".pokemon-list")
      .eq(0)
      .then((pokemon) => {
        const nombrePokemon = pokemon.text();
        cy.get(".next-page-button")
          .click()
          .then(() => {
            cy.get(".pokemon-list")
              .eq(0)
              .should((nuevoPokemon) => {
                expect(nuevoPokemon.text()).not.to.eq(nombrePokemon);
              });
          });
      });
  });
  it("shows the chosen pokemon", () => {
    cy.get(".pokemon-list")
      .eq(3)
      .then((pokemon) => {
        const nombrePokemon = pokemon.text();
        cy.get(".pokemon-list")
          .eq(3)
          .click()
          .then(() => {
            cy.get(".pokemon-list")
              .eq(3)
              .should((nuevoNombrePokemon) => {
                expect(nombrePokemon).not.to.eq(nuevoNombrePokemon);
              });
          });
      });
  });
});
