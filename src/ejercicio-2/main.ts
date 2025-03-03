import { Biblioteca } from "./biblioteca"
import { Artista } from "./artista"
import { Discografia } from "./discografia"
import { Cancion } from "./cancion"

let cancion_duki1: Cancion = new Cancion("Nueva Era", 217, ["Rock", "Trap"], false, 85000000)
let cancion_duki2: Cancion = new Cancion("Brindis", 180, ["Rock", "Trap"], false, 15000000)

let ameri: Discografia = new Discografia("Ameri", 2024, [cancion_duki1, cancion_duki2])

let duki: Artista = new Artista("Duki", 18000000, [ameri]);

let cancion_emilia1: Cancion = new Cancion("Iconic.mp3", 181, ["Pop"], true, 55000000)
let cancion_emilia2: Cancion = new Cancion("Facts.mp3", 130, ["Pop"], true, 32000000)

let mp3: Discografia = new Discografia("mp3", 2023, [cancion_emilia1, cancion_emilia2])

let emilia: Artista = new Artista("Emilia", 16000000, [mp3])

let biblioteca: Biblioteca = new Biblioteca([duki, emilia]);

let salida1 = biblioteca.buscarArtista("Duki")
let salida2 = biblioteca.buscarDisco("mp3")
let salida3 = biblioteca.buscarCanciones("Nueva Era")

biblioteca.imprimir(salida1)
biblioteca.imprimir(salida2)
biblioteca.imprimir(salida3)

console.log(`El numero de canciones es: ${biblioteca.numCanciones("Ameri")}`)
console.log(`La duracion del disco es: ${biblioteca.duracionDisco("Ameri")}`)
console.log(`El numero de reproducciones en el disco es: ${biblioteca.reproduccionDisco("Ameri")}`)
