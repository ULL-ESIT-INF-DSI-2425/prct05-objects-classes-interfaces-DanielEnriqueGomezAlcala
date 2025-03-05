import { Coche } from './coche'
import { Moto } from './moto'

type ParkingCoche = [Coche, string, string]
type ParkingMoto = [Moto, string, string]

/**
 * Clase que representa un parking
 */
export class Parking {
  private coches_: ParkingCoche[]
  private motos_: ParkingMoto[]
  private maxCoche_: number
  private maxMoto_: number

  /**
   * Constructor de la clase Parking
   * 
   * @param coches - parking de coches
   * @param motos - parking de motos
   * @param maxCoche - Tamanio maximo del parking de coches
   * @param maxMoto - Tamanio maximo del parking de motos
   */
  constructor(coches: ParkingCoche[], motos: ParkingMoto[], maxCoche: number, maxMoto: number) {
    this.coches_ = coches
    this.motos_ = motos
    this.maxCoche_ = maxCoche
    this.maxMoto_ = maxMoto
  }

  /**
   * Metodo que muestra listado de coches
   * 
   * @returns Retorna una cadena con la informacion de los vehiculos estacionados
   */
  mostrarCoches(): string {
    let aux: string = ""
    this.coches_.forEach(coche => {
      aux += `Vehiculo: ${coche[0].matricula}, Fecha: ${coche[1]}, Hora: ${coche[2]}\n`
    })
    return aux
  }

  /**
   * Metodo que muestra el listado de motos
   * 
   * @returns - Retorna una string con las motos
   */
  mostrarMotos(): string {
    let aux: string = ""
    this.motos_.forEach(moto => {
      aux += `Vehiculo: ${moto[0].matricula}, Fecha: ${moto[1]}, Hora: ${moto[2]}\n`
    })
    return aux
  }

  /**
   * Metodo que registra la entrada de un vehiculo
   * 
   * @param vehiculo - Vehiculo que entra en el parking
   * @returns Retorna true si es correcta la entrada
   */
  vehiculoEntrada(vehiculo: (Coche | Moto)): boolean {
    if (vehiculo instanceof Coche) {
      if (this.coches_.length < this.maxCoche_) {
        let aux: ParkingCoche = [vehiculo, "0000", "0000"];
        this.coches_.push(aux)
        return true
      }
    }
    else if(vehiculo instanceof Moto) {
      if (this.motos_.length < this.maxMoto_) {
        let aux: ParkingMoto = [vehiculo, "0000", "0000"];
        this.motos_.push(aux)
        return true
      }
    }
    return false
  }

  /**
   * Metodo que registra la salida de un vehiculo
   * 
   * @param vehiculo - Vehiculo que sale del parking
   * @returns Retorna true si la salida es correcta
   */
  vehiculoSalida(vehiculo: (Coche | Moto)): boolean {
    if (vehiculo instanceof Coche) {
      let index: number = this.coches_.findIndex(coche => { return coche[0] === vehiculo })
      if (index !== -1) {
        this.coches_.splice(index, 1)
        return true
      }
      else {
        return false
      }
    }
    else if (vehiculo instanceof Moto) {
      let index: number = this.motos_.findIndex(moto => { return moto[0] === vehiculo })
      if (index !== -1) {
        this.motos_.splice(index, 1)
        return true
      }
      else {
        return false
      }
    }
    return false
  }

  /**
   * Metodo que busca un vehiculo segun su matricula
   * 
   * @param matricula_aux - Matricula de la que buscaremos el vehiculo
   * @returns Retorna el vehiculo si lo encuentra
   */
  buscarVehiculo(matricula_aux: string): Coche | Moto | undefined {
    for (let coche of this.coches_) { 
      if (coche[0].matricula === matricula_aux) {
        return coche[0]
      }
    }

    for (let moto of this.motos_) {
      if (moto[0].matricula === matricula_aux) {
        return moto[0]
      }
    }
    return undefined
  }

  /**
   * Metodo que busca un vehiculo segun du marca y modelo
   * 
   * @param marca - Marca del vehiculo que buscaremos
   * @param modelo - Modelo del vehiculo que buscaremos
   * @returns - Retorna el vehiculo si lo encuentra
   */
  buscarVehiculoMarcaModelo(marca: string, modelo: string): Coche | Moto | undefined {
    for (let coche of this.coches_) { 
      if (coche[0].marca === marca && coche[0].modelo === modelo) {
        return coche[0]
      }
    }

    for (let moto of this.motos_) {
      if (moto[0].marca === marca && moto[0].modelo === modelo) {
        return moto[0]
      }
    }
    return undefined
  }
}

let coche1: Coche = new Coche("4061HZJ", "Volkswagen", "Golf", false)
  let coche2: Coche = new Coche("4000HZJ", "Seat", "Leon", false)
  let moto1: Moto = new Moto("4062HZJ", "BMW", "S1000R", false)
  let moto2: Moto = new Moto("5000HZJ", "Yamaha", "R6", false)
  let parking: Parking = new Parking([[coche1, "23/10", "9:00"]], [[moto1, "20/10", "16:00"]], 10, 10)

  parking.vehiculoEntrada(moto2);
  console.log(`${parking.mostrarMotos()}\n`)

  parking.vehiculoSalida(moto2)
  console.log(`${parking.mostrarMotos()}\n`)