import { describe, test, expect } from 'vitest'
import { Pokemon, PesoAltura, Statistics } from "../src/ejercicio-1/pokemon"

describe('Pokemon class tests', () => {
    const charmander = new Pokemon("Charmander", [30, "100 cm"], ["Fuego"], [49, 49, 45, 45])
    const bulbasaur = new Pokemon("Bulbasaur", [30, "100 cm"], ["Grass", "Poison"], [49, 49, 45, 45])

    test('should create a Pokemon instance', () => {
        expect(charmander).toBeInstanceOf(Pokemon)
        expect(bulbasaur).toBeInstanceOf(Pokemon)
    })

    test('should get the correct name', () => {
        expect(charmander.name).toBe("Charmander")
        expect(bulbasaur.name).toBe("Bulbasaur")
    })

    test('should get the correct pesoAltura', () => {
        expect(charmander.pesoAltura).toEqual([30, "100 cm"])
        expect(bulbasaur.pesoAltura).toEqual([30, "100 cm"])
    })

    test('should get the correct type', () => {
        expect(charmander.type).toEqual(["Fuego"])
        expect(bulbasaur.type).toEqual(["Grass", "Poison"])
    })

    test('should get the correct statistics', () => {
        expect(charmander.statistics).toEqual([49, 49, 45, 45])
        expect(bulbasaur.statistics).toEqual([49, 49, 45, 45])
    })

    test('should set new statistics', () => {
        charmander.statistics = [50, 50, 50, 50]
        expect(charmander.statistics).toEqual([50, 50, 50, 50])
    })
})