import { Artista } from "./artista";

export class Biblioteca {
  /**
   * Conjunto de artistas que conforman la biblioteca musical
   */
  private artistas_: Artista[]

  /**
   * Constructor de la clase Biblioteca
   * 
   * @param artistas - Conjunto de artistas que conforman la biblioteca musical
   */
  constructor(artistas: Artista[]) {
    this.artistas_ = artistas
  }

  /**
   * Getter de los artistas de la clase Biblioteca
   */
  get artistas() {
    return this.artistas_
  }

  /**
   * Método de la clase Biblioteca para imprimir como tabla
   * 
   * @param artistas - Conjunto de artistas de los que se imprimira la informacion como tabla 
   */
  imprimir(artistas: Artista[]): void {
    // Crear una estructura de datos para mostrar en la tabla
    let tablaBiblioteca = artistas.map(artista => {
      return {
        Artista: artista.nombre,
        Oyentes: artista.oyentes,
        Discografias: artista.discografia.map(disco => disco.nombre).join(", "),
        Canciones: artista.discografia.flatMap(disco => disco.canciones.map(cancion => cancion.nombre)).join(", ")
      }
    });
    console.table(tablaBiblioteca)
  }

  /**
   * Método que busca información de un artista especifico
   * 
   * @param nombre - Nombre del artista al que buscaremos la informacion
   * @returns Retorna la array con informacion del artista del que buscamos
   */
  buscarArtista(nombre: string): Artista[] {
    return this.artistas_.filter(x => x.nombre === nombre)
  }

  /**
   * Método que busca información de un disco especifico
   * 
   * @param nombre - Nombre del Disco al que buscaremos la informacion
   * @returns Retorna array con la informacion del disco
   */
  buscarDisco(nombre: string): Artista[] {
    return this.artistas_.filter( artista =>
      artista.discografia.some(disco =>
        disco.nombre === nombre
      )
    )
  }

  /**
   * Método que busca información de una canción especifico
   * 
   * @param nombre - Nombre de la cancion al que buscaremos la informacion
   * @returns Retorna array con la informacion de la cancion
   */
  buscarCanciones(nombre: string): Artista[] {
    return this.artistas_.filter( artista =>
      artista.discografia.some(disco =>
        disco.canciones.some(cancion => 
          cancion.nombre === nombre
        )
      )
    )
  }

  /**
   * Método que calcula el numero de canciones que contiene un disco
   * 
   * @param nombre - Nombre del disco al que calcularemos el numero de canciones que tiene
   * @returns Devuelve el numero de canciones que contiene el disco
   */
  numCanciones(nombre: string): number {
    let totalCanciones = 0;
    this.buscarDisco(nombre).forEach(artista => {
      artista.discografia.forEach(disco => {
      totalCanciones += disco.canciones.length;
      });
    });
    return totalCanciones;
  }

  /**
   * Metodo que calcula la duración de un disco
   * 
   * @param nombre - Nombre del disco
   * @returns Devuelve la duración de un disco
   */
  duracionDisco(nombre: string): number {
    let minutos: number = 0;
    this.artistas_.forEach(artista => 
      artista.discografia.forEach(disco => {
        if (nombre === disco.nombre) {
          disco.canciones.forEach(cancion => {
            minutos += cancion.duracion;
          });
        }
      })
    );
    return minutos;
  }

  /**
   * Metodo que calcula las reproducciones de un disco
   * 
   * @param nombre - Nombre del disco
   * @returns Devuelve las reproducciones de un disco
   */
  reproduccionDisco(nombre: string): number {
    let reproduccion: number = 0;
    this.artistas_.forEach(artista => 
      artista.discografia.forEach(disco => {
        if (nombre === disco.nombre) {
          disco.canciones.forEach(cancion => {
            reproduccion += cancion.reproducciones;
          });
        }
      })
    );
    return reproduccion;
  }

}