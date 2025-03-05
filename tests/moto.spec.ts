import { test, expect, describe } from 'vitest'
import { Moto } from '../src/ejercicio-modi/moto'

describe ("Pruebas de la clase Coche", () => {
    let moto1: Moto = new Moto("4062HZJ", "BMW", "S1000R", false)

    test("Se crea una instancia", () => {
        expect(moto1).toBeInstanceOf(Moto)
    })

    test("Prueba de los metodos", () => {
        expect(moto1.getData()).toEqual(`Matricula: 4062HZJ\nMarca: BMW\nModelo: S1000R\nCiclo Motor: ${moto1.ciclo_motor}\n`)
    })

    test("Prueba de los getter", () => {
        expect(moto1.matricula).toEqual("4062HZJ")
        expect(moto1.marca).toEqual("BMW")
        expect(moto1.modelo).toEqual("S1000R")
        expect(moto1.ciclo_motor).toBe(false)
    })

    test("Prueba de los setter", () => {
        moto1.matricula = "4061HZJ"
        moto1.marca = "Volkswagen"
        moto1.modelo = "Golf VI"
        moto1.ciclo_motor = true

        expect(moto1.matricula).toEqual("4061HZJ")
        expect(moto1.marca).toEqual("Volkswagen")
        expect(moto1.modelo).toEqual("Golf VI")
        expect(moto1.ciclo_motor).toBe(true)
    })
})