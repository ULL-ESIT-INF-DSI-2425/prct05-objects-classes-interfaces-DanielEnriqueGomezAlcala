import { Discografia } from "./discografia";

export class Artista {
  /**
   * Nombre del artista
   */
  private nombre_: string

  /**
   * Numero de oyentes que escuchan al artista
   */
  private oyentes_: number

  /**
   * Discos del artista
   */
  private discografia_: Discografia[]

  /**
   * Constructor de la clase Artista
   * 
   * @param nombre - Nombre del artista
   * @param oyentes - Numero de oyentes que escuchan al artista
   * @param discografia - Discos del artista
   */
  constructor(nombre: string, oyentes: number, discografia: Discografia[]) {
    this.nombre_ = nombre
    this.oyentes_ = oyentes
    this.discografia_ = discografia
  }

  /**
   * Getter del nombre de la clase artista
   */
  get nombre() {
    return this.nombre_
  }

  /**
   * Getter de los oyentes de la clase Artista
   */
  get oyentes() {
    return this.oyentes_
  }
  
  /**
   * Getter de la discografia de la clase Artista
   */
  get discografia() {
    return this.discografia_
  }
}