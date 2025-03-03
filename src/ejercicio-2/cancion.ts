export class Cancion {
  private nombre_: string
  private duracion_: number
  private generos_: string[]
  private single_: boolean
  private reproducciones_: number

  constructor(nombre: string, duracion: number, generos: string[], single: boolean, reproducciones: number) {
    this.nombre_ = nombre
    this.duracion_ = duracion
    this.generos_ = generos
    this.single_ = single
    this.reproducciones_ = reproducciones
  }

  get nombre() {
    return this.nombre_
  }

  get duracion() {
    return this.duracion_
  }

  get generos() {
    return this.generos_
  }

  get single() {
    return this.single_
  }

  get reproducciones() {
    return this.reproducciones_
  }
}