import { test, expect, describe } from 'vitest'
import { Coche } from '../src/ejercicio-modi/coche'
import { Moto } from '../src/ejercicio-modi/moto'
import { Parking } from '../src/ejercicio-modi/parking'

describe("Pruebas de la clase Parking", () => {
  let coche1: Coche = new Coche("4061HZJ", "Volkswagen", "Golf", false)
  let coche2: Coche = new Coche("4000HZJ", "Seat", "Leon", false)
  let moto1: Moto = new Moto("4062HZJ", "BMW", "S1000R", false)
  let moto2: Moto = new Moto("5000HZJ", "Yamaha", "R6", false)
  let parking: Parking = new Parking([[coche1, "23/10", "9:00"]], [[moto1, "20/10", "16:00"]], 10, 10)
  
  test("Prueba creacion de instancia", () => {
    expect(parking).toBeInstanceOf(Parking)
  })

  test("Prueba listado de coches", () => {
    expect(parking.mostrarCoches()).toEqual("Vehiculo: 4061HZJ, Fecha: 23/10, Hora: 9:00\n")
  })

  test("Prueba listado de motos", () => {
    expect(parking.mostrarMotos()).toEqual("Vehiculo: 4062HZJ, Fecha: 20/10, Hora: 16:00\n")
  })

  test("Entrada al parking", () => {
    expect(parking.vehiculoEntrada(moto2)).toBe(true)
    expect(parking.vehiculoEntrada(coche2)).toBe(true)
  })

  test("Salida del parking", () => {
    expect(parking.vehiculoEntrada(moto2)).toBe(true)
    expect(parking.vehiculoEntrada(coche2)).toBe(true)
  })

  test("Buscar vehiculo por matricula", () => {
    expect(parking.buscarVehiculo("4061HZJ")).toEqual(coche1)
  })

  test("Buscar vehiculo por marca y modelo", () => {
    expect(parking.buscarVehiculoMarcaModelo("Volkswagen", "Golf")).toEqual(coche1)
  })

})