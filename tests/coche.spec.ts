import { test, expect, describe } from 'vitest'
import { Coche } from '../src/ejercicio-modi/coche'

describe ("Pruebas de la clase Coche", () => {
    let coche1: Coche = new Coche("4061HZJ", "Volkswagen", "Golf", false)

    test("Se crea una instancia", () => {
        expect(coche1).toBeInstanceOf(Coche)
    })

    test("Prueba de los metodos", () => {
        expect(coche1.getData()).toEqual(`Matricula: 4061HZJ\nMarca: Volkswagen\nModelo: Golf\nHibrido: ${coche1.hibrido}\n`)
    })

    test("Prueba de los getter", () => {
        expect(coche1.matricula).toEqual("4061HZJ")
        expect(coche1.marca).toEqual("Volkswagen")
        expect(coche1.modelo).toEqual("Golf")
        expect(coche1.hibrido).toBe(false)
    })

    test("Prueba de los setter", () => {
        coche1.matricula = "4062HZJ"
        coche1.marca = "Volkswagen"
        coche1.modelo = "Golf VI"
        coche1.hibrido = true

        expect(coche1.matricula).toEqual("4062HZJ")
        expect(coche1.marca).toEqual("Volkswagen")
        expect(coche1.modelo).toEqual("Golf VI")
        expect(coche1.hibrido).toBe(true)
    })
})