import { describe, test, expect } from 'vitest'
import { Pokedex } from "../src/ejercicio-1/pokedex"
import { Pokemon } from "../src/ejercicio-1/pokemon"

describe('Pokedex class tests', () => {
    const charmander = new Pokemon("Charmander", [30, "100 cm"], ["Fuego"], [49, 49, 45, 45])
    const bulbasaur = new Pokemon("Bulbasaur", [30, "100 cm"], ["Grass", "Poison"], [49, 49, 45, 45])
    const pokedex = new Pokedex([charmander, bulbasaur])

    test('should create a Pokedex instance', () => {
        expect(pokedex).toBeInstanceOf(Pokedex)
    })

    test('should add a new Pokemon', () => {
        const squirtle = new Pokemon("Squirtle", [25, "90 cm"], ["Water"], [44, 48, 65, 50])
        pokedex.addPokemon(squirtle)
        expect(pokedex.getAllPokemon()).toContain(squirtle)
    })

    test('should find a Pokemon by name', () => {
        expect(pokedex.searchPokemon("Fuego")).toEqual([charmander])
        expect(pokedex.searchPokemon("Agua")).toEqual(undefined)
    })
})