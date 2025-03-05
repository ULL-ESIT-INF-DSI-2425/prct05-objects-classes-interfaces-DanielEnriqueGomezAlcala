import { Vehiculo } from './vehiculo'

/**
 * Clase que representa a una moto
 */
export class Moto extends Vehiculo {
  private ciclo_motor_: boolean
  
  /**
   * Constructor de la clase Moto
   * 
   * @param matricula - Matricula de la Moto
   * @param marca - Marca de la Moto
   * @param modelo - Modelo de la Moto
   * @param ciclo_motor - True si es un ciclo motor
   */
  constructor(matricula: string, marca: string, modelo: string, ciclo_motor: boolean) {
    super(matricula, marca, modelo)
    this.ciclo_motor_ = ciclo_motor
  }

  /**
   * Getter del atricuto ciclo_motor
   */
  get ciclo_motor() {
    return this.ciclo_motor_
  }

  /**
   * Setter del atricuto ciclo_motor
   */
  set ciclo_motor(ciclo_motor: boolean) {
    this.ciclo_motor_ = ciclo_motor
  }

  /**
   * Metodo que devuelve una string con la informacion del objeto
   * 
   * @returns Información de la moto
   */
  getData(): string {
    let aux: string = ""

    aux += `Matricula: ${this.matricula}\n`
    aux += `Marca: ${this.marca}\n`
    aux += `Modelo: ${this.modelo}\n`
    aux += `Ciclo Motor: ${this.ciclo_motor}\n`
    return aux
  }
}