import { describe, test, expect, vi } from 'vitest'
import { Combat } from "../src/ejercicio-1/combat"
import { Pokemon } from "../src/ejercicio-1/pokemon"

describe('Combat class tests', () => {
    const charmander = new Pokemon("Charmander", [30, "100 cm"], ["Fuego"], [52, 43, 45, 39])
    const bulbasaur = new Pokemon("Bulbasaur", [30, "100 cm"], ["Hierba", "Poison"], [49, 49, 45, 45])
    const combat = new Combat(charmander, bulbasaur)

    test('should create a Combat instance', () => {
        expect(combat).toBeInstanceOf(Combat)
    })

    test('should calculate effectiveness correctly', () => {
        expect(combat.getEfectividad("Fuego", "Hierba")).toBe(2)
        expect(combat.getEfectividad("Fuego", "Agua")).toBe(0.5)
        expect(combat.getEfectividad("Agua", "Fuego")).toBe(2)
        expect(combat.getEfectividad("Hierba", "Agua")).toBe(2)
        expect(combat.getEfectividad("Eléctrico", "Agua")).toBe(2)
        expect(combat.getEfectividad("Eléctrico", "Hierba")).toBe(1)
        expect(combat.getEfectividad("Electrico", "Hierba")).toBe(0)
    })

    test('should start combat and determine the winner', () => {
        const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
        combat.start()
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining("Turno 1: Charmander ataca a Bulbasaur"))
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining("Bulbasaur ha sido derrotado. ¡Charmander gana el combate!"))
        consoleLogSpy.mockRestore()
    })
})