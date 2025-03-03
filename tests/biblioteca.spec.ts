import { expect, describe, test, vi  } from 'vitest'
import { Cancion } from '../src/ejercicio-2/cancion'
import { Discografia } from '../src/ejercicio-2/discografia'
import { Artista } from '../src/ejercicio-2/artista'
import { Biblioteca } from '../src/ejercicio-2/biblioteca'

describe ('Pruebas de la clase Biblioteca', () => {
    let cancion_duki1: Cancion = new Cancion("Nueva Era", 217, ["Rock", "Trap"], false, 85000000)
    let cancion_duki2: Cancion = new Cancion("Brindis", 180, ["Rock", "Trap"], false, 15000000)
    
    let ameri: Discografia = new Discografia("Ameri", 2024, [cancion_duki1, cancion_duki2])
    
    let duki: Artista = new Artista("Duki", 18000000, [ameri]);
    
    let cancion_emilia1: Cancion = new Cancion("Iconic.mp3", 181, ["Pop"], true, 55000000)
    let cancion_emilia2: Cancion = new Cancion("Facts.mp3", 130, ["Pop"], true, 32000000)
    
    let mp3: Discografia = new Discografia("mp3", 2023, [cancion_emilia1, cancion_emilia2])
    
    let emilia: Artista = new Artista("Emilia", 16000000, [mp3])
    
    let biblioteca: Biblioteca = new Biblioteca([duki, emilia]);

  test('Debe crear instancia de Biblioteca', () => {
    expect(biblioteca).toBeInstanceOf(Biblioteca)
  })

  test('Prueba de los Getter', () => {
    expect(biblioteca.artistas).toEqual([duki, emilia])
  })

  test('Prueba del metodo buscarArtista', () => {
    expect(biblioteca.buscarArtista("Duki")).toEqual([duki])
    expect(biblioteca.buscarArtista("Emilia")).toEqual([emilia])
    expect(biblioteca.buscarArtista("Bad Bunny")).toEqual([])
  })

  test('Prueba del metodo buscarDisco', () => {
    expect(biblioteca.buscarDisco("Ameri")).toEqual([duki])
    expect(biblioteca.buscarDisco("mp3")).toEqual([emilia])
    expect(biblioteca.buscarDisco("Unknown")).toEqual([])
  })

  test('Prueba del metodo buscarCanciones', () => {
    expect(biblioteca.buscarCanciones("Nueva Era")).toEqual([duki])
    expect(biblioteca.buscarCanciones("Iconic.mp3")).toEqual([emilia])
    expect(biblioteca.buscarCanciones("Unknown")).toEqual([])
  })

  test('Prueba del metodo numCanciones', () => {
    expect(biblioteca.numCanciones("Ameri")).toBe(2)
    expect(biblioteca.numCanciones("mp3")).toBe(2)
    expect(biblioteca.numCanciones("Unknown")).toBe(0)
  })

  test('Prueba del metodo duracionDisco', () => {
    expect(biblioteca.duracionDisco("Ameri")).toBe(397)
    expect(biblioteca.duracionDisco("mp3")).toBe(311)
    expect(biblioteca.duracionDisco("Unknown")).toBe(0)
  })

  test('Prueba del metodo reproduccionDisco', () => {
    expect(biblioteca.reproduccionDisco("Ameri")).toBe(100000000)
    expect(biblioteca.reproduccionDisco("mp3")).toBe(87000000)
    expect(biblioteca.reproduccionDisco("Unknown")).toBe(0)
  })

  test('Prueba del metodo imprimir', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    biblioteca.imprimir(biblioteca.artistas);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  })
})
