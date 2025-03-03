import { expect, describe, test } from 'vitest'
import { Cancion } from '../src/ejercicio-2/cancion'
import { Discografia } from '../src/ejercicio-2/discografia'

describe ('Pruebas de la clase Cancion', () => {
  let cancion_duki1: Cancion = new Cancion("Nueva Era", 217, ["Rock", "Trap"], false, 85000000)
  let cancion_duki2: Cancion = new Cancion("Brindis", 180, ["Rock", "Trap"], false, 15000000)
  let ameri: Discografia = new Discografia("Ameri", 2024, [cancion_duki1, cancion_duki2])

  test('Debe crar instancia de cancion', () => {
    expect(ameri).toBeInstanceOf(Discografia)
  })

  test('Prueba de los Getter', () => {
    expect(ameri.anio).toEqual(2024)
    expect(ameri.canciones).toEqual([cancion_duki1, cancion_duki2])
    expect(ameri.nombre).toEqual("Ameri")
  })
})