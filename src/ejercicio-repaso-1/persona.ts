export abstract class Persona {
  /**
   * Nombre de la persona
   */
  private nombre_: string
  /**
   * Apellidos de la persona
   */
  private apellidos_: string
  /**
   * Fecha de nacimiento de la persona
   */
  private fecha_nacimiento_: string

  /**
   * Constructor de la clase Persona
   * 
   * @param nombre - Nombre de la persona
   * @param apellidos - Apellido de la persona
   * @param fecha_nacimiento - Fecha de nacimiento de la persona
   */
  constructor(nombre: string, apellidos: string, fecha_nacimiento: string) {
    this.nombre_ = nombre
    this.apellidos_ = apellidos
    this.fecha_nacimiento_ = fecha_nacimiento
  }

  /**
   * Getter del atributo nombre
   */
  get nombre() {
    return this.nombre_
  }

  /**
   * Getter del atributo apellidos
   */
  get apellidos() {
    return this.apellidos_
  }

  /**
   * Getter del atributo fecha_nacimiento
   */
  get fecha_nacimiento() {
    return this.fecha_nacimiento_
  }

  /**
   * Setter del atributo nombre
   */
  set nombre(nombre: string) {
    this.nombre_ = nombre
  }

  /**
   * Setter del atributo apellidos
   */
  set apellidos(apellidos: string) {
    this.apellidos_ = apellidos
  }

  /**
   * Setter del atributo fecha_nacimiento
   */
  set fecha_nacimiento(fecha_nacimiento: string) {
    this.fecha_nacimiento_ = fecha_nacimiento
  }

  /**
   * Metodo abstracto para imprimir datos personales
   */
  abstract print(): void
}