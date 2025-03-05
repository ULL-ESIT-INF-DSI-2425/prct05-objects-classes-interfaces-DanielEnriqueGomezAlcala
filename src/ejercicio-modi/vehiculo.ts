/**
 * Clase abstracta que representa a un Vehiculo
 */
export abstract class Vehiculo {
  private matricula_: string
  private marca_: string
  private modelo_: string

  /**
   * Constructor de la clase Vehiculo
   * 
   * @param matricula - Matricula del vehiculo
   * @param marca - Marca del vehiculo
   * @param modelo - Modelo del vehiculo
   */
  constructor(matricula: string, marca: string, modelo: string) {
    this.matricula_ = matricula
    this.marca_ = marca
    this.modelo_ = modelo
  }

  /**
   * Getter de la Matricula
   */
  get matricula() {
    return this.matricula_
  }

  /**
   * Getter de la Marca
   */
  get marca() {
    return this.marca_
  }

  /**
   * Getter del modelo
   */
  get modelo() {
    return this.modelo_
  }

  /**
   * Setter de la Matricula
   */
  set matricula(matricula: string) {
    this.matricula_ = matricula
  }

  /**
   * Setter de la Marca
   */
  set marca(marca: string) {
    this.marca_ = marca
  }

  /**
   * Setter del modelo
   */
  set modelo(modelo: string) {
    this.modelo_ = modelo
  }

  /**
   * Definicion de método abstracto
   */
  abstract getData(): string
}