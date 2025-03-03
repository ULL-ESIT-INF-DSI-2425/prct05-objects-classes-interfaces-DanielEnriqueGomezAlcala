import { expect, describe, test } from 'vitest'
import { Cancion } from '../src/ejercicio-2/cancion'
import { Discografia } from '../src/ejercicio-2/discografia'
import { Artista } from '../src/ejercicio-2/artista'

describe ('Pruebas de la clase Cancion', () => {
  let cancion_duki1: Cancion = new Cancion("Nueva Era", 217, ["Rock", "Trap"], false, 85000000)
  let cancion_duki2: Cancion = new Cancion("Brindis", 180, ["Rock", "Trap"], false, 15000000)
  let ameri: Discografia = new Discografia("Ameri", 2024, [cancion_duki1, cancion_duki2])
  let duki: Artista = new Artista("Duki", 18000000, [ameri]);

  test('Debe crar instancia de cancion', () => {
    expect(duki).toBeInstanceOf(Artista)
  })

  test('Prueba de los Getter', () => {
    expect(duki.discografia).toEqual([ameri])
    expect(duki.oyentes).toEqual(18000000)
    expect(duki.nombre).toEqual("Duki")
  })
})