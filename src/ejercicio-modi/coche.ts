import { Vehiculo } from './vehiculo'

/**
 * Clase que representa a una moto
 */
export class Coche extends Vehiculo {
  private hibrido_: boolean
  
  /**
   * Constructor de la clase Moto
   * 
   * @param matricula - Matricula del coche
   * @param marca - Marca del coche
   * @param modelo - Modelo del coche
   * @param hibrido - True si es un ciclo motor
   */
  constructor(matricula: string, marca: string, modelo: string, hibrido: boolean) {
    super(matricula, marca, modelo)
    this.hibrido_ = hibrido
  }

  /**
   * Getter del atributo hibrido
   */
  get hibrido() {
    return this.hibrido_
  }

  /**
   * Setter del atributo hibrido
   */
  set hibrido(hibrido: boolean) {
    this.hibrido_ = hibrido
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
    aux += `Hibrido: ${this.hibrido}\n`
    return aux
  }
}