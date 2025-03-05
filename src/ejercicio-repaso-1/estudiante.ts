import { Persona } from './persona'

export class Estudiante extends Persona {
  /**
   * Correo institucional del alumno
   */
  private correo_: string
  
  /**
   * Constructor de la clase Estudiante
   * 
   * @param nombre - Nombre del estudiante
   * @param apellidos - Apellidos del estudiante
   * @param fecha_nacimiento - Fecha de nacimiento del estudiante
   * @param correo - Correo institucional del estudiante
   */
  constructor(nombre: string, apellidos: string, fecha_nacimiento: string, correo: string) {
    super(nombre, apellidos, fecha_nacimiento)
    this.correo_ = correo
  }

  /**
   * Getter del correo del alumno
   */
  get correo() {
    return this.correo_
  }

  /**
   * Setter del correo del alumno
   */
  set correo(correo: string) {
    this.correo_ = correo
  }

  /**
   * Metodo que imprime los datos personales del alumno
   */
  print() {
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Apellidos: ${this.apellidos}`)
    console.log(`Fecha de nacimiento: ${this.fecha_nacimiento}`)
    console.log(`Correo: ${this.correo}`)
  }
}