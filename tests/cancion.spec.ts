import { expect, describe, test } from 'vitest'
import { Cancion } from '../src/ejercicio-2/cancion'

describe ('Pruebas de la clase Cancion', () => {
  let cancion_duki1: Cancion = new Cancion("Nueva Era", 217, ["Rock", "Trap"], false, 85000000)
  let cancion_duki2: Cancion = new Cancion("Brindis", 180, ["Rock", "Trap"], false, 15000000)

  test('Debe crar instancia de cancion', () => {
    expect(cancion_duki1).toBeInstanceOf(Cancion)
  })

  test('Prueba de los Getter', () => {
    expect(cancion_duki1.duracion).toEqual(217)
    expect(cancion_duki1.generos).toEqual(["Rock", "Trap"])
    expect(cancion_duki1.nombre).toEqual("Nueva Era")
    expect(cancion_duki1.reproducciones).toEqual(85000000)
    expect(cancion_duki1.single).toEqual(false)
  })
})