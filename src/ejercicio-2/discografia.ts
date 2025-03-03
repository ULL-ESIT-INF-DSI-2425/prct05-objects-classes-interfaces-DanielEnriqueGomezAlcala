import { Cancion } from "./cancion"

export class Discografia {
  private nombre_: string
  private anio_: number
  private canciones_: Cancion[]

  constructor(nombre: string, anio: number, canciones: Cancion[]) {
    this.nombre_ = nombre
    this.anio_ = anio
    this.canciones_ = canciones
  }

  get nombre() {
    return this.nombre_
  }

  get anio() {
    return this.anio_
  }

  get canciones() {
    return this.canciones_
  }
}