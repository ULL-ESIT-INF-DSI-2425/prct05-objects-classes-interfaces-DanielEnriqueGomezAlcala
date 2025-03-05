import { Profesor } from './profesor'
import { Estudiante } from './estudiante'
import { Asignatura } from './asignatura'

let estudiante1: Estudiante = new Estudiante("Daniel", "Gómez Alcalá", "25/10/2004", "alu0101547961@ull.edu.es")
let estudiante2: Estudiante = new Estudiante("Diego", "Gómez Alcalá", "07/09/2004", "alu0101111111@ull.edu.es")

let profesor1: Profesor = new Profesor("Carlos", "Martin Alfonso", "10/10/1990", "carmin@ull.es", ['Lunes 9-14', 'Martes 5-7'])
let profesor2: Profesor = new Profesor("Eduardo", "Segredo", "10/04/1990", "eduseg@ull.es", ['Lunes 9-14', 'Martes 5-7'])

let dsi: Asignatura = new Asignatura(1167, "Desarrollo de sistemas informaticos", [profesor1, profesor2], [[estudiante1, 10], [estudiante2, 5]])

dsi.mostrarEstudiantes()
console.log()
dsi.mostrarProfesores()
console.log()
console.log()

dsi.buscarEstudiante("Daniel")
console.log()
dsi.buscarProfesor("Eduardo")
console.log()
console.log()

dsi.buscarNota(10)