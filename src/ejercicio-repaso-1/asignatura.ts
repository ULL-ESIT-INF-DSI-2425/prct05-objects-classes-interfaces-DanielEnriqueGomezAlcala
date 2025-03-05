import { Estudiante } from './estudiante'
import { Profesor } from './profesor'

type Calificacion = [Estudiante, number]

export class Asignatura {
  accessor codigo_: number
  accessor nombre_: string
  accessor profesores_: Profesor[]
  accessor estudiantes_: Calificacion[]

  /**
   * Constructor de la clase
   * 
   * @param codigo - Codigo de la asignatura
   * @param nombre - Nombre de la asignatura
   * @param profesores - Profesores que imparten la asignatura
   * @param estudiantes - Estudiantes que cursan la asignatura
   */
  constructor(codigo: number, nombre: string, profesores: Profesor[], estudiantes: Calificacion[]) {
    this.codigo_ = codigo
    this.nombre_ = nombre
    this.profesores_ = profesores
    this.estudiantes_ = estudiantes
  }

  /**
   * Metodo que muestra a los profesores de la asignatura
   */
  mostrarProfesores(): void {
    this.profesores_.forEach(profesor => {
      profesor.print()
    })
  }
  
  /**
   * Metodo que muestra a los estudiantes de la aisgnatura
   */
  mostrarEstudiantes(): void {
    this.estudiantes_.forEach(estudiante => {
      estudiante[0].print()
    })
  }

  /**
   * Metodo que busca a profesor a partir del nombre o correo
   * 
   * @param busqueda - correo o nombre del profesor
   */
  buscarProfesor(busqueda: string): void {
    this.profesores_.forEach(profesor => {
      if (profesor.nombre === busqueda || profesor.correo === busqueda) {
        profesor.print()
      }
    })
  }

  /**
   * Metodo que busca a un alumno a partir de su correo o nombre
   * 
   * @param busqueda - correo o nombre del alumno
   */
  buscarEstudiante(busqueda: string): void {
    this.estudiantes_.forEach(estudiante => {
      if (estudiante[0].nombre === busqueda || estudiante[0].correo === busqueda) {
        estudiante[0].print()
      }
    })
  }

  /**
   * Metodo que busca estudiantes con la calificacion que pasemos
   * 
   * @param nota - Calificacion 
   */
  buscarNota(nota: number): void {
    let aux = this.estudiantes_.filter(estudiante => estudiante[1] == nota)

    aux.forEach(estudiante => {
      estudiante[0].print()
    })
  }
}