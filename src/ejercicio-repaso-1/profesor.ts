import { Persona } from './persona'

export class Profesor extends Persona {
  private correo_: string
  private horario_tutorias_: string[]

  /**
   * Constructor de la clase Profesor
   * 
   * @param nombre - Nombre del profesor
   * @param apellidos - Apellidos del profesor
   * @param fecha_nacimiento - Fecha de nacimiento del profesor
   * @param correo - Correo institucional del profesor
   * @param horario_tutorias - Horario de tutorias del profesor
   */
  constructor(nombre: string, apellidos: string, fecha_nacimiento: string, correo: string, horario_tutorias: string[]) {
    super(nombre, apellidos, fecha_nacimiento)
    this.correo_ = correo
    this.horario_tutorias_ = horario_tutorias
  }

  /**
   * Getter del correo
   */
  get correo() {
    return this.correo_
  }

  /**
   * Getter del horario de tutorias
   */
  get horario_tutorias() {
    return this.horario_tutorias_
  }

  /**
   * Setter del correo
   */
  set correo(correo: string) {
    this.correo_ = correo
  }
  
  /**
   * Setter del horario de tutorias
   */
  set horario_tutorias(horario_tutorias: string[]) {
    this.horario_tutorias_ = horario_tutorias
  }

  /**
   * Metodo para imprimir los datos personales de un profesor
   */
  print() {
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Apellidos: ${this.apellidos}`)
    console.log(`Fecha de nacimiento: ${this.fecha_nacimiento}`)
    console.log(`Correo: ${this.correo}`)
    console.log(`Horario Tutorias: ${this.horario_tutorias}`)
  }

}